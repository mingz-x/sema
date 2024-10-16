import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='art'>
        <div className="menu">
            <h2>전시와 프로그램</h2>
            <h4><Link href='/exhibition'>전시</Link></h4>
            <h4><Link href='/education'>교육프로그램</Link></h4>

            <h2>소장품과 미술연구</h2>
            <h4><Link href='/collection'>SeMA 소장품</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/semaaa/front/main.do' target="_blank">미술아카이브</Link></h4>
            <h4><Link href='http://semacoral.org/' target="_blank">모두의 연구실 &apos;코랄&apos;</Link></h4>
            <h4>SeMA 도서와 자료</h4>

            <h2><Link href='/visit'>방문하기</Link></h2>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/seosomun' target="_blank">서울시립미술관 서소문본관</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/bukseoul' target="_blank">서울시립 북서울미술관</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/namseoul' target="_blank">서울시립 남서울미술관</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/art_archive' target="_blank">서울시립 미술아카이브</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/nanji_residency' target="_blank">서울시립 난지미술창작스튜디오</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/sema_bunker' target="_blank">SeMA 벙커</Link></h4>
            <h4><Link href='https://sema.seoul.go.kr/kr/visit/nam_june_paik_house' target="_blank">SeMA 백남준기념관</Link></h4>
        </div>
    </div>
  )
}

export default Menu