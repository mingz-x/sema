import Link from 'next/link'
import React from 'react'

const My = () => {
  return (
    <div className='art'>
        <div className='my'>
            {/* <h2>SeMA</h2> */}
            <Link href='./login'><h2>로그인/회원가입</h2></Link>
            <div className="my-menu">
                <Link href='/my/history'>내가 본 작품</Link>
                <Link href='/my/notice'>공지사항</Link>
                <Link href='/my/qna'>자주 묻는 질문</Link>
                <Link href='/my/favorite'>좋아요</Link>
                {/* <Link href='/my/setting'>앱 설정</Link> */}
            </div>
        </div>
    </div>
  )
}

export default My