import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='art'>
        <div className='login'>
            <div className='i-login'>
                <h2>로그인</h2>
                <h3>서울시 계정과 소셜 미디어 계정으로 로그인할 수 있습니다.</h3>
            </div>
            <div className='slogin'>
                <h2>서울시 통합회원 계정으로 로그인</h2>
                {/* <p>서울시립미술관 홈페이지 회원은 서울시 홈페이지 회원과 통합으로 관리됩니다.</p> */}
                <input type='text'placeholder='아이디' name='id'/> <br/>
                <input type='password'placeholder='비밀번호' name='pw'/> <br/>
                <input className='lg' type='submit' value='로그인'/>
                <input type="hidden" name="refresh_url" value="http://sema.seoul.go.kr/ssfilter/index.jsp?retUrl=/kr/index"></input>
                {/* 서울시 통합 로그인: https://www.seoul.go.kr/member/userlogin/login.do */}
                <div className='h4'>
                  <Link href='https://www.seoul.go.kr/member/findId/findId.do?SITE_GB=GB007&refresh_url=http%3A%2F%2Fsema.seoul.go.kr%2F' target="_blank" ><h4>아이디/비밀번호 찾기</h4></Link>
                  {/* <Link href='https://www.seoul.go.kr/member/findPwd/findPwd.do?SITE_GB=GB007&refresh_url=http%3A%2F%2Fsema.seoul.go.kr%2F'><h4>비밀번호 찾기</h4></Link> */}
                  <Link href='https://www.seoul.go.kr/member/join/regist01.do?SITE_GB=GB007&refresh_url=http%3A%2F%2Fsema.seoul.go.kr%2F' target="_blank"><h4>서울시 통합 회원가입</h4></Link>
                </div>
            </div>
            <div className='sslogin'>
              <h2>소셜 계정으로 로그인</h2>
              <button className='N'>네이버 아이디로 로그인</button>
              <button className='K'>카카오 아이디로 로그인</button>
              {/* <button onClick={()=>signIn('github',{callbackUrl:'/'})}></button> */}
            </div>
        </div>
    </div>
  )
}

export default Login