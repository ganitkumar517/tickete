import React from 'react'
import Chat from '../../assets/ChatWithUs.svg'
export default function ChatWithUs() {
    return (
        <div className='space-y-8'>
            <div>
                <h3 className='font-semibold text-lg'>Frequently asked questions</h3>
                <div className='text-[#60646C] text-sm'>Here are some of our most asked questions. </div>
            </div>
            <img src={Chat}></img>
        </div>
    )
}
