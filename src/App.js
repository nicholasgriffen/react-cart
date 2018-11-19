import React, { Component } from 'react'
import Cart from './Cart'

class App extends Component {
  render() {
    const cartItemsList = [
      { id: 1, 
        product: { 
          id: 40, 
          name: 'Mediocre Iron Watch', 
          priceInCents: 399 
        }, 
          quantity: 1 
        },
      { id: 2, 
        product: { 
          id: 41, 
          name: 'Heavy Duty Concrete Plate', 
          priceInCents: 499 
        }, 
          quantity: 2 },
      { id: 3, 
        product: { 
          id: 42, 
          name: 'Intelligent Paper Knife', 
          priceInCents: 1999 
        }, 
        quantity: 1 },
    ]
    return (
      <div className="App">
        <Cart list={cartItemsList}/>
      </div>
    )
  }
}

export default App