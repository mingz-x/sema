import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
console.log('sdfsdf')
  const { data: session } = useSession(); 
  if (session) { 
    console.log(session)
   }

  return (
    <div className='art'>
        <div className='login'>
          <div className='i-login'>
            <h2>로그인</h2>
          </div>
          
          
          <div className='sslogin'>
            <h2>소셜 계정으로 로그인</h2>
            <button onClick={() => signIn('naver',{callbackUrl:'/'})} className='N'>
              네이버 아이디로 로그인
            </button>
            
            <button onClick={() => signIn('kakao',{callbackUrl:'/'})} className='K'>
              카카오 아이디로 로그인
            </button>

            {/* <button onClick={()=>signIn('github',{callbackUrl:'/'})}></button> */}
          </div>
        </div>
    </div>
  )
}

export default Login