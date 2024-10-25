import { db } from '@/lib/firebase'
import useStore from '@/state/store'
import { collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'


import React, { useEffect, useState } from 'react'

const Scrap = ({img}) => {
  const {dataSave,data} = useStore()
  const [scrap,setScrap] = useState();
  const router = useRouter()

  const getData = async ()=>{
    const d = await getDocs(collection(db, "favorite"));
    const scrapArry=[]
    d.forEach((doc) => {
      scrapArry.push({id:doc.id, ...doc.data()})
    });

    setScrap(scrapArry);
  }

  useEffect(()=>{
    getData();
  },[])
  
   

  // const a = [ex, ed, co]
  //   let ex = data?.exhibition
  //   let ed = data?.education
  //   let co = data?.collection
  //   console.log(ex, ed, co);
  return (
    <div className='art'>
        <div className='scrap'>
          <h2>SCRAP</h2>
          <div>
            {scrap && scrap.map(item=>
              <figure key={item.id} onClick={()=>router.push(`/content?id=${item.id}`)}>
                <img src={item.thumb}/>
              </figure>
            )}
          </div>
          
        </div>
    </div>
  )
}

export default Scrap





// import { useState, useEffect } from "react";

// export default function Home() {
//   const [scrapContent, setScrapContent] = useState("");
//   const [scraps, setScraps] = useState([]);

//   // 스크랩 저장 함수
//   const saveScrap = async () => {
//     const response = await fetch("/api/scrap", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ content: scrapContent }),
//     });

//     if (response.ok) {
//       setScrapContent("");
//       loadScraps();  // 저장 후 스크랩 목록 갱신
//     }
//   };

//   // 스크랩 데이터 불러오기
//   const loadScraps = async () => {
//     const response = await fetch("/api/scraps");
//     const data = await response.json();
//     setScraps(data);
//   };

//   useEffect(() => {
//     loadScraps();
//   }, []);

//   return (
//     <div>
//       <h1>Scrap Page</h1>
//       <input
//         type="text"
//         value={scrapContent}
//         onChange={(e) => setScrapContent(e.target.value)}
//         placeholder="Enter scrap content"
//       />
//       <button onClick={saveScrap}>Save Scrap</button>

//       <h2>Scraps</h2>
//       <ul>
//         {scraps.map((scrap) => (
//           <li key={scrap.id}>{scrap.content}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
