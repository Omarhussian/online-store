import React from 'react'

const Cart = () => {
  return (
    <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          <span>{item.title}</span> - <span>${item.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
    <div className="total">
      <span>Total:</span> <span>${totalPrice.toFixed(2)}</span>
    </div>
  </div>
  )
}

export default Cart