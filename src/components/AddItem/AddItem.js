import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            productID: this.props.products[0].id
        }
    }
    onChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: +e.target.value,
        })
    }
    onSubmit = e => {
        e.preventDefault()
        const { quantity, productID } = this.state
        const product = this.props.products.find(product => product.id === productID)
        console.log(quantity, product)
    }
    render() {
        const { products } = this.props
        return (
            <form onSubmit={this.onSubmit}>
                <label>Quantity:
                <input type="number" min="1" name="quantity" onChange={this.onChange} value={this.state.quantity}/>
                </label>
                <label>Item: 
                <select name="productID" onChange={this.onChange}>
                    {products.map((product, idx) => (
                        <option key={idx} value={product.id}>{product.name}</option>
                    ))}
                </select>
                </label>
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default AddItem