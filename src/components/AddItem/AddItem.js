import React, { Component } from 'react'

class AddItem extends Component {
    render() {
        const { products } = this.props
        return (
            <form>
                <label>Quantity:
                <input type="number"/>
                </label>
                <label>Item: 
                <select>
                    {products.map(product => (
                        <option value={product.id}>{product.name}</option>
                    ))}
                </select>
                </label>
            </form>
        )
    }
}

export default AddItem