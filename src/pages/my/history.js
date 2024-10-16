import React from 'react'

const History = () => {
  return (
    <div className='art'>
        <div className='history'>
            <h2>내가 본 작품</h2>
            <div>
                <h4>10.02</h4>
                <dl>
                    <div className="h-list">
                        <dt>상설전 《서도호와 아이들: 아트랜드》</dt>
                        <dd>전시</dd>
                        <dd>서울시립 북서울미술관</dd>
                    </div>
                    <div className="h-img"><img src='../image.jpeg'/></div>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default History