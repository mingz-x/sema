import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '@/state/store';
import { useSearchParams } from 'next/navigation';

const Content = () => {

  const router = useRouter();
  const { data } = useStore();
  const [item, setItem] = useState(null);
  const params = useSearchParams();
  const id = params.get('id');

  console.log(item);
  

//   education -> ACADMY_NO
//   exhibition -> DP_EX_NO


    useEffect(() => {
        if (id) {
            // 데이터에서 해당 ID를 가진 항목 찾기
            let Item1 = data.exhibition.find((li) => li.DP_EX_NO === id);
            let Item2 = data.education.find((li) => li.ACADMY_NO === id);
            let Item3 = data.collection.find((li) => li.prdct_nm_korean === id);
            setItem([Item1,Item2,Item3]);
        }
    }, [id]);


    if (!item) return <p>Loading...</p>;

    // return<></>;

  return (
    <div className='art'>
        <div className='content'>
            {/* {
                data?.map((obj,i)=>
                    (i<1) ? (
                        <div key={obj[id]}>
                            <h2>{obj[name]}</h2>
                            <p>{obj[place]}</p>
                            <h4>{obj[pname]}</h4>
                            <figure><img src={obj[img]}/></figure>
                            <div className='art-info'>
                                <p  dangerouslySetInnerHTML={{__html: obj[info]}}></p>
                            </div>
                        </div>
                    ) : ''
                )
            } */}
            {
                item[1] ? 
                <div>
                    <h2>{item[1].EDU_NAME}</h2>
                    <p>{item[1].EDU_PLACE}</p>
                    <h4>{item[1].TCHER_NAME}</h4>
                    <figure><img src={item[1].EDU_IMG}/></figure>
                    <figure className='save'>
                        <button><img className='favorite' src='./favorite.svg'/></button>
                        <button><img className='bookmark' src='./bookmark.svg'/></button>
                    </figure>
                    <div className='art-info'>
                        <p dangerouslySetInnerHTML={{__html: item[1].EDU_CONTENT}}></p>
                    </div>
                </div>
                :
                item[2] ? 
                <div>
                    <h2>{item[2].prdct_nm_korean}</h2>
                    <p>{item[2].prdct_cl_nm}, {item[2].mnfct_year}</p>
                    <h4>{item[2].writr_nm}</h4>
                    <figure><img src={item[2].main_image}/></figure>
                    <div className='art-info'>
                        <p dangerouslySetInnerHTML={{__html: item[2].matrl_technic}}></p>
                    </div>
                </div>
                :
                <div>
                    <h2>{item[0].DP_NAME}</h2>
                    <p>{item[0].DP_PLACE}</p>
                    <h4>{item[0].DP_ARTIST}</h4>
                    <figure><img src={item[0].DP_MAIN_IMG}/></figure>
                    <div className='art-info'>
                        <p  dangerouslySetInnerHTML={{__html: item[0].DP_INFO}}></p>
                    </div>
                </div>
            }
            

            
        </div>
    </div>
  )
}

export default Content