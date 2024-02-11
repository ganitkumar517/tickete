import React from 'react'
import ChatWithUs from './ChatWithUs'
import FeedBackQuestion from './FeedBackQuestion'

export default function index() {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-[120px] py-[80px]">
            <div class="order-1 md:order-2 max-w-[690px]">
                <FeedBackQuestion />
            </div>
            <div class="order-2 md:order-1 max-w-[486px]">
                <ChatWithUs />
            </div>
        </div>
    )
}
