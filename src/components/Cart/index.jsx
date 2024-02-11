import React from 'react'
import ConfirmPayment from './ConfirmPayment'
import CartDetail from './CartDetail'

export default function index() {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-[120px] ">
            <div class="order-1 md:order-2 max-w-[384px]">
                <CartDetail />
            </div>
            <div class="order-2 md:order-1 max-w-[792px]">
                <ConfirmPayment />
            </div>
        </div>

    )
}
