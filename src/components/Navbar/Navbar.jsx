import React from 'react'
import Logo from '../../assets/Logo.svg'
import Lock from '../../assets/Lock.svg'
import Question from '../../assets/Question.svg'
export default function Navbar() {
    return (
        <div className='flex justify-between my-3 mx-16'>
            <img src={Logo} />
            <div className='flex items-center gap-2'>
                <img src={Lock} />
                <span className='text-gray-500 font-semibold'>Checkout</span>
            </div>
            <div className='flex items-center gap-2'>
                <img src={Question} />
                <span>Help</span>
            </div>
        </div>
    )
}
