import React from 'react'

const CartItem = ({ name, price, quantity }) => {
    return (
        <div className="collection-item">
            <div class="row">
                <div class="col-md-8">{ name }</div>
                <div class="col-md-2">{ price }</div>
                <div class="col-md-2">{ quantity }</div>
            </div>
        </div>
    )
}

export default CartItem