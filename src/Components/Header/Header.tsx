import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between '>
        <div className='flex items-center w-full md:w-2/3'>
            <Link href="/" className='font-black text-[#f27405]'></Link>
        </div>

        <ul className="flex items-center ml-5"></ul>

        <ul></ul>
    </header>
  )
}
export default Header