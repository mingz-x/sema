// import { db, storage } from '@/lib/firebase';
// import React, { useEffect, useRef, useState } from 'react';
// import { deleteObject, ref, getDownloadURL, uploadBytes, listAll } from "firebase/storage";
// import { collection, doc, getDocs, getDoc, addDoc, setDoc, deleteDoc  } from "firebase/firestore"; 
// import Image from 'next/image';

// const Firebase = () => {

//   let [preview, setPreview] = useState();
//   let [loading, setLoading] = useState(false);
//   let [imgUrl, setImgUrl] = useState([]);

//   let fileEle = useRef();

//   function pre(e){
//     let file = new FileReader();
//     file.readAsDataURL( e.target.files[0] )

//     file.onload = (e)=>{
//       setPreview(e.target.result);
//     }
//   }

//   function save(e){
//     e.preventDefault();
//     const file = e.target.photo.files[0]

//     // ref(storage, '파일이름')
//     let storageRef = ref(storage, file.name);

//     setLoading(true);
//     // uploadBytes(위치, 파일)
//     uploadBytes(storageRef, file)
//     .then(res=>{
//       // console.log(res);
//       setLoading(false);
//       setPreview('');
//     })
//   }

//   function getImages(){
//     listAll( ref(storage) )
//     .then(async (res)=>{

//       let url = [];

//       for(let i=0; i<res.items.length; i++){
//         let name = res.items[i].name;

//         url.push(
//           {name, url:await getDownloadURL(res.items[i])}
//         )
//       }

//       setImgUrl(url);
      

//       // let url = res.items.map(async (item)=>{
//       //             return await getDownloadURL(item)
//       //           })

//       // let url = await new Promise(async(resolve, reject) => {
//       //   res.items.map(async (item) =>{
//       //     await getDownloadURL(item)
//       //   })
//       // })
    
//       // setImgUrl
      
//     })
//   }

//   function delImage(name){

//     setLoading(true);

//     // deleteObject(서버접속, 삭제할이미지명)
//     deleteObject(ref(storage,name))
//     .then(res=>{
//       setLoading(false);
//       getImages();
//     })
//   }

//   return (
//     <>
//       {/* <div>
//         <div>이미지 미리보기</div>
        
//         <div className='preview'>        
//           <img src={preview} />
//           <button onClick={()=>fileEle.current.click()}><img src="./camera.png"/></button>
//         </div>

//         <form onSubmit={save}>  
//           <input 
//           style={{display:'none'}}
//           ref={fileEle} 
//           type="file" name="photo" onChange={pre} multiple />

//           <button>저장</button>
//         </form>

//         {
//           loading &&
//           <div className='loading'><img src="./loading.gif"/></div>
//         }


//         <h2>
//           Firebase Storage 가져오기
//           <button onClick={getImages}>리스트</button>
//         </h2>

//         <ul className='firebase-list'>
//         {
//           imgUrl.map((item)=>
//             <li>
//               <figure><img src={item.url}/></figure>
//               <button onClick={()=>delImage(item.name)}>삭제</button>
//             </li>
//           )
//         }
//         </ul>

//       </div>
//       <Firestore setLoading={setLoading}/> */}
//     </>
//   )
// }

// export default Firebase



// export function Firestore({setLoading}){
  
//   const [data, setData] = useState([]);
//   const [mode, setMode] = useState(true);
//   const [update, setUpdate] = useState({
//     name:'', subject:'', content:'', url:''
//   });

//   const updateFn = (edit)=>{
//     // {subject:e.target.value}
//     // {name:e.target.value}
//     // {contnet:e.target.value}
//     setUpdate(
//       {...update, ...edit}
//     )
//   }

//   const crud = {
//     get:async()=>{
//     // 컬렉션의 모든 문서 가져오기
//       const querySnapshot = await getDocs(collection(db, "test"));

//       let dataArry = [];
//       querySnapshot.forEach((doc) => {
//         dataArry.push({id:doc.id, ...doc.data()})
//         // doc.data() is never undefined for query doc snapshots
//         // console.log(doc.id, " => ", doc.data());
//       });
//       setData(dataArry);
//     },
//     post:async(e)=>{
      
//       e.preventDefault();
//       let formdata = new FormData(e.target);
//       setLoading(true);

//       // storage(파일업로드)
//       const file = e.target.file.files[0];
//       const fileName = 'board/'+file.name;
//       // ref(storage,file.name)
//       const storageRef = ref(storage, fileName)
//       // uploadBytes(저장위치,파일)
//       await uploadBytes(storageRef,file);
//       const fileUrl = await getDownloadURL(storageRef);

//       // db
//       // addDoc(db접속 컬렉션이름, 추가할내용)
//       // addDoc(collection(db,'test'), {name:'홍길동'})
//       formdata.append('date','2024-09-27');
//       formdata.append('url',fileUrl);
//       formdata.append('imgName',fileName);


//       let obj = Object.fromEntries(formdata);
//       // let file = {file:{...obj.file}}
//       delete obj.file;
//       await addDoc(collection(db,'test'),obj);
//       await crud.get();

//       e.target.reset();
//       setLoading(false);
//     },
//     put:async(e)=>{
//       e.preventDefault();

//       if(update.file){
//         //storage
//         const file = update.file;
//         const fileName = 'board/'+file.name;

//         const storageRef = ref(storage, fileName);
//         await uploadBytes(storageRef,file);   
          
//         const fileUrl = await getDownloadURL(storageRef);

//         let set = {...update};
//         set.fileName = fileName;
//         set.url = fileUrl;

//         delete set.file;
//         await setDoc(doc(db, "test", update.id), set);
//       }
//       else{
//         let set = {...update};
//         await setDoc(doc(db, "test", update.id), set);
//       }

//       // return; // 아래 내용 안나옴
//       // let set = {...update}
//       // delete set.file;
//       // await setDoc(doc(db, "test", item.id), set);
//     },
//     delete:async(item)=>{
//       setLoading(true)
//       await deleteDoc(doc(db,'test',item.id))
//       await deleteObject(ref(storage, item.fileName))
//       await crud.get()
//       setLoading(false)
//     }
//   }

//   console.log(update);
//   useEffect(()=>{
//     crud.get();
//   },[])
  
//   return(
//     <div>
//     </div>
//   )
// }

import React from 'react'

const Firebase = () => {
  return (
    <div>firebase</div>
  )
}

export default Firebase