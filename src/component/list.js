import Content from '@/pages/content';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const List = ({data, id, img, name, place, start, end, wave}) => {
    const router = useRouter();

    const handleClick = (itemId) => {
        // 해당 ID를 쿼리 파라미터로 사용하여 Content 페이지로 이동
        router.push(`/content?id=${itemId}`);
    };

  return (
    <div className='art'>
        <div className='list'>
            {
                data?.map((li)=>
                    <div key={li[id]}>
                        <div className="e-img"  onClick={() => handleClick(li[id])}><img src={li[img]}/></div>
                        <div className="e-list">
                            <h4>{li[name]}</h4>
                            {/* <span>{li.DP_ART_PART}</span> */}
                            <p>
                                {li.writr_nm}{li[place]} <br/>
                                {li.mnfct_year}{li[start]}{wave}{li[end]}
                            </p>
                        </div>
                    </div>
                )
            }
            
        </div>
    </div>
  )
}

export default List