import Link from 'next/link'
import React from 'react'

const Visit = () => {
  return (
    <div className='art'>
        <div className="visit">
                <h2>방문하기</h2>
                <p>서울시립미술관은 시대와 미술의 변화에 부응하고, 서로를 채우며 성장해 가는 네트워크 미술관입니다.</p>
                <div className="v-list">
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/seosomun'>
                            <figure><img src='seosomun'/></figure>
                            <h4>서울시립미술관 서소문본관</h4>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/bukseoul'>
                            <figure><img src='bukseoul'/></figure>
                            <h4>서울시립 북서울미술관</h4>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/namseoul'>
                            <figure><img src='namseoul'/></figure>
                            <h4>서울시립 남서울미술관</h4>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/art_archive'>
                            <figure><img src='art_archive'/></figure>
                            <h4>서울시립 미술아카이브</h4>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/nanji_residency'>
                            <figure><img src='nanji_residency'/></figure>
                            <h4>서울시립 난지미술창작스튜디오</h4>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/sema_bunker'>
                            <figure><img src='sema_bunker'/></figure>
                            <h4>SeMA 벙커</h4>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://sema.seoul.go.kr/kr/visit/nam_june_paik_house'>
                            <figure><img src='nam_june_paik_house'/></figure>
                            <h4>SeMA 백남준기념관</h4>
                        </Link>
                    </div>  
                </div>
            </div>

    </div>
  )
}

export default Visit