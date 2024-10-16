import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='art'>
        <div className='header'>
            <Link href='./'>
                <figure><img src='o_typo_b.svg'/></figure>
            </Link>
        </div>
    </div>
  )
}

export default Header