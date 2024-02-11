import React from 'react'
import Logo from '../../assets/Logo-white.svg'
export default function index() {
    return (
        <div className='h-[316px] w-full bg-black flex flex-col justify-between'>
            <div className='pt-[132px] pl-8'>
                <img src={Logo}></img>
            </div>
            <div>
                <hr></hr>
                <div className='pl-8'>
                    <nav class=" p-4 flex gap-6">
                        <span class="text-white">Made with ❤️ Ganit Kumar</span>
                        <ul class="flex space-x-4 gap-4 text-white list-disc">
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms of usage</a></li>
                            <li><a href="#">Cancellation policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
