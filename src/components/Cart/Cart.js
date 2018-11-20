import React, { Component } from 'react'
import CartHeader from '../CartHeader/CartHeader'
import CartItems from '../CartItems/CartItems'
import CartFooter from '../CartFooter/CartFooter'

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <header>
                    <CartHeader />
                </header>
                <CartItems items={this.props.list}/>
                <footer>
                    <CartFooter copyright='2016'/>
                </footer>
            </div>
        )
    }
}

export default Cart