import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartItems = ({ items }) => {
    const itemList = items.map((item, idx) => {
        return (
            <div key={idx} className="list-group-item">
                <CartItem name={item.product.name} price={item.product.priceInCents / 100} quantity={item.quantity}/>
            </div>
        )
    })
    const total = items.reduce((acc, item) => {
        return acc + (item.product.priceInCents * item.quantity)
    }, 0) / 100
    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                { itemList }
                <p className="list-group-item">Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartItems