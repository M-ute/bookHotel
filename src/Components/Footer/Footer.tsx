import Link from 'next/link'
import React from 'react'
import {  BiMessageSquareDetail } from 'react-icons/bi'
import { BsFillSendFill,  BsTelephoneOutboundFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='mt-15'>
        <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-dark" >
                Hotel Booking App
            </Link>

            <h4 className="font-semibold text-[40px] py-6">Contact</h4>

            <div className='flex flex-wrap gap-16 items-center justify-between'>
                <div className="flex-1">
                    <p>123 Road</p>
                    <div className="flex items-center py-4">
                        <BsFillSendFill />
                        <p className="ml-2">HUB64</p>
                    </div>

                     <div className="flex items-center  ">
                        <BsTelephoneOutboundFill />
                        <p className="ml-2">+(000) 000-000-000</p>
                    </div>

                     <div className="flex items-center pt -4">
                        <BiMessageSquareDetail />
                        <p className="ml-2">HUB64</p>
                    </div>
                </div>

                <div className="flex-1 md:text-right">
                    <p className='pb-4'>Our Story</p>
                    <p className='pb-4'>Get in Touch</p>
                    <p className='pb-4'>Our Privacy Commitment</p>
                    <p className='pb-4'>Terms of Office</p>
                    <p >Our Story</p>
                </div>

                <div className="flex-1 md:text-right"> 
                    <div className="pb-4">Dining Experience</div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer