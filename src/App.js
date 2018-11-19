import React, { Component } from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <CartHeader />
        </header>
        <footer>
          <CartFooter />
        </footer>
      </div>
    );
  }
}

export default App