import Link from 'next/link'
import React from 'react'

const Bar = () => {
  return (
    <div className='art'>
        <div className="bar">
            <Link href='/search'><img src='search.svg'/></Link>
            <Link href='/menu'><img src='menu.svg'/></Link>
            <Link href='/'><img src='home.svg'/></Link>
            <Link href='/scrap'><img src='favorite.svg'/></Link>
            <Link href='/my'><img src='person.svg'/></Link>
        </div>
    </div>
  )
}

export default Bar