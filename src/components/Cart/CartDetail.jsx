import React from 'react'
import Carousel from './Carousel'
import Rating from '../../assets/Rating-star.svg'
import Ticket from '../../assets/ticket.svg'
import Time from '../../assets/Time.svg'
import Calender from '../../assets/calender.svg'
import Guests from '../../assets/guests.svg'
import Badge from '../../assets/Badge-1.svg'
import Info from '../../assets/Info.svg'
import Lock from '../../assets/Lock-1.svg'
export default function CartDetail() {
    return (
        <div className='border p-2 pr-8 rounded-2xl pb-6'>
            <div>
                <Carousel />
            </div>
            <div className='pl-10'>
                <div className='flex items-center gap-1 '>
                    <img src={Rating}></img>
                    <span className='font-semibold'>4.9</span>
                    <span className='text-[#60646C]'>(4.5k)</span>
                    <span className='mb-3 text-2xl'>.</span>
                    <span className='text-[#60646C]'>&lt; category &gt;</span>
                </div>
                <div className='text-base font-semibold'>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</div>
                <div className='flex gap-4 flex-col'>
                    <div className='flex gap-2'>
                        <img src={Ticket}></img>
                        <div className='font-semibold'> &lt; ticket type - variant &gt;</div>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <img src={Calender}></img>
                            <div className='font-semibold'> &lt; Day &gt;, &lt; Month &gt;, &lt; Date &gt;</div>
                        </div>
                        <div className='text-[#60646C] ml-7'>Duration: &lt; duration &gt;</div>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <img src={Time}></img>
                            <div className='font-semibold'> &lt; ticket type - variant &gt;</div>
                        </div>
                        <div className='text-[#60646C] ml-7'>Operating hours: &lt; Time &gt; to &lt; Time &gt;</div>
                    </div>
                    <div className='flex gap-2'>
                        <img src={Guests}></img>
                        <div className='font-semibold'> 5 guests</div>
                    </div>
                    <hr className='border-dashed border'></hr>
                </div>
                <div className='flex justify-between items-center p-5'>
                    <span className='underline text-gray-400'>View payment summary</span>
                    <span className='text-3xl text-gray-400'>+</span>
                </div>
                <div className='flex gap-4 flex-col'>
                    <div>
                        <div className='flex justify-between font-semibold'>
                            <h3>Total payable</h3>
                            <h3>$XXX</h3>
                        </div>
                        <img src={Badge} className='mt-1'></img>
                    </div>
                    <div className='text-[#60646C] flex gap-2'>You will be charged in AED <img src={Info}></img></div>
                </div>
                <div className='flex gap-4 flex-col mt-6'>
                    <div>By clicking “confirm & pay”, you agree to <span className='text-[#3A5CCC]'>Tickete’s general terms and conditions</span> and <span className='text-[#3A5CCC]'>cancellation policy</span>.</div>
                    <div>
                        <button className='flex bg-black text-white gap-2 p-4 py-2 rounded-2xl justify-center w-full'>
                            <img src={Lock}></img>
                            Confirm & pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
