import Link from 'next/link'
import React from 'react'
import Login from './login'
import { signIn, signOut, useSession } from 'next-auth/react';

const My = () => {
  const { data: session } = useSession(); 
  if (session) { 
    console.log(session)
    return (
      <div className='art'>
        <div className='my'>
          {/* <h2>SeMA</h2> */}
          <Link href='./login' onClick={()=>signOut()}>
            <h2>이름
              {session.user.email}
            </h2>
          </Link>
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
  return (
    <div className='art'>
      <div className='my'>
        {/* <h2>SeMA</h2> */}
        <Link href='./login' onClick={()=>Login(signIn)}><h2>로그인/회원가입</h2></Link>
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