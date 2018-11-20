import React, { Component } from 'react'
import CartHeader from '../CartHeader/CartHeader'
import CartItems from '../CartItems/CartItems'
import CartFooter from '../CartFooter/CartFooter'
import AddItem from '../AddItem/AddItem'

class Cart extends Component {
    render() {
        const total = this.props.list.reduce((acc, item) => {
            return acc + (item.product.priceInCents * item.quantity)
        }, 0) / 100
        return (
            <div className="Cart">
                <header>
                    <CartHeader />
                </header>
                <CartItems items={this.props.list}/>
                <p>Total: ${total.toFixed(2)}</p>
                <AddItem products={this.props.products} onAddItem={this.props.onAddItem}/>
                <footer>
                    <CartFooter copyright='2016'/>
                </footer>
            </div>
        )
    }
}

export default Cart