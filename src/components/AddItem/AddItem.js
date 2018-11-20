import React, { Component } from 'react'

class AddItem extends Component {
    onSubmit = e => {
        console.log(e.target.value)
    }
    render() {
        const { products } = this.props
        return (
            <form onSubmit={this.onSubmit}>
                <label>Quantity:
                <input type="number"/>
                </label>
                <label>Item: 
                <select>
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