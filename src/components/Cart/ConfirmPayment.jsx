import React from 'react'
import Info from '../../assets/Info.svg'
import Wallet from '../../assets/wallet.svg'
import Radio from '../../assets/Radio.svg'
import Visa from '../../assets/visa.svg'
import Master from '../../assets/mastercard.svg'
import Diner from '../../assets/diners-club.svg'
import Badge from '../../assets/Badge.svg'
import Vector from '../../assets/Vector.svg'
import Lock from '../../assets/Lock-1.svg'
import GooglePay from '../../assets/gpay.svg'
import ApplePay from '../../assets/apple-pay.svg'
import Wrapper from '../../assets/Icon-Wrapper.svg'
import Glob from '../../assets/glob.svg'

export default function ConfirmPayment() {
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-8'>
                <div className='font-medium text-[57px] font-serif pb-7'>Confirm & pay</div>
                <div className='flex justify-between items-start  border-gray-300 border rounded-xl p-4 bg-gray-100'>
                    <div>
                        <h3 className='font-semibold text-sm text-[#1C2024]'>Free cancellation</h3>
                        <div className='text-[#60646C] text-sm'>Tickets can be cancelled by 13th December, 2022.</div>
                    </div>
                    <img src={Info}></img>
                </div>
            </div>
            <div>
                <div>
                    <h3 className='pb-4 font-semibold text-2xl'>Enter your details</h3>
                    <div className='text-[#60646C] text-base pb-4'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</div>
                </div>
                <div className='flex flex-col gap-6 mb-8'>
                    <input placeholder='Full name' className='rounded-xl border border-gray-200 py-2 px-2.5 w-full' />
                    <div className='grid grid-cols-2 gap-6' >
                        <div class="relative">
                            <img src={Glob} className='absolute flex items-center top-[22%] pl-1.5'></img>
                            <select class="pl-8 rounded-xl border border-gray-200 py-2 px-2.5 w-full">
                                <option value="" disabled selected>Country code</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="UK">United Kingdom</option>
                            </select>
                        </div>
                        <input placeholder='Phone number' className='rounded-xl border border-gray-200 py-2 px-2.5 ' />
                        <input placeholder='Email' className='rounded-xl border border-gray-200 py-2 px-2.5' />
                        <input placeholder='Confirm email' className='rounded-xl border border-gray-200 py-2 px-2.5    ' />
                    </div>
                </div>
                <hr />
            </div>
            <div>
                <div>
                    <h3 className='pb-4 font-semibold text-2xl'>Additional information</h3>
                    <div className='text-[#60646C] text-base pb-4'>We need a few more details to complete your reservation.</div>
                </div>
                <div className='flex flex-col gap-6 mb-8'>
                    <div className='grid grid-cols-2 gap-6' >
                        <input placeholder='Input label' className='rounded-xl border border-gray-200 py-2 px-2.5' />
                        <input placeholder='Select' className='rounded-xl border border-gray-200 py-2 px-2.5    ' />
                    </div>
                    <input placeholder='Multiselect' className='rounded-xl border border-gray-200 py-2 px-2.5 w-full' />
                </div>
                <hr />
            </div>
            <div className='flex gap-8 flex-col'>
                <div>
                    <h3 className='pb-4 font-semibold text-2xl'>Select your mode of payment</h3>
                    <div className='text-[#60646C] text-base pb-4'>Payments with Tickete are secure and encrypted.</div>
                </div>
                <div className='p-6 flex flex-col gap-8 border border-black rounded-2xl'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <img src={Wallet}></img>
                            <div className='font-bold text-base'>Credit & debit card</div>
                        </div>
                        <img src={Radio}></img>
                    </div>
                    <div className='flex gap-1'>
                        <img src={Visa}></img>
                        <img src={Master}></img>
                        <img src={Diner}></img>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <input placeholder='Name on card' className='rounded-xl border border-gray-200 py-2 px-2.5 ' />
                        <div className='relative'>
                            <img src={Wallet} className='absolute flex items-center top-[22%] pl-1.5'></img>
                            <input placeholder='Card number' className='rounded-xl border border-gray-200 py-2 px-2.5 w-full pl-12' />
                        </div>
                        <input placeholder='Expiry date' className='rounded-xl border border-gray-200 py-2 px-2.5' />
                        <input placeholder='<CVV/CVC>' className='rounded-xl border border-gray-200 py-2 px-2.5' />
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='text-lg font-semibold'>Total payable: $XXX</div>
                            <img src={Badge}></img>
                        </div>
                        <div className='text-gray-400 flex gap-2 mt-2'>You will be charged in AED <img src={Vector}></img></div>
                    </div>
                    <div>
                        By clicking “confirm & pay”, you agree to <span className='text-[#3A5CCC]'>Tickete’s general terms and conditions</span> and <span className='text-[#3A5CCC]'>cancellation policy</span>.
                    </div>
                    <div>
                        <button className='flex bg-black text-white gap-2 p-4 rounded-2xl'>
                            <img src={Lock}></img>
                            Confirm & pay
                        </button>
                    </div>
                </div>
                <div className='flex justify-between border-gray-300 border p-6 rounded-2xl bg-gray-100'>
                    <div className='flex gap-2'>
                        <img src={ApplePay}></img>
                        <div>Coming soon</div>
                    </div>
                    <div className='h-6 w-6 rounded-full bg-gray-300'></div>
                </div>
                <div className='flex justify-between border-gray-300 border p-6 rounded-2xl bg-gray-100'>
                    <div className='flex gap-2'>
                        <img src={GooglePay}></img>
                        <div>Coming soon</div>
                    </div>
                    <div className='h-6 w-6 rounded-full bg-gray-300'></div>
                </div>
                <hr />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-2xl font-semibold'>Total Payable: $XXX</div>
                <div className='border border-gray-300 rounded-2xl p-4'>
                    <div className='flex gap-2 items-center'>
                        <img src={Wrapper}></img>
                        <div className='text-black font-semibold text-sm'>You will be charged in AED</div>
                    </div>
                    <div className='text-sm text-[#60646C] ml-6 w-[50%]'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}
