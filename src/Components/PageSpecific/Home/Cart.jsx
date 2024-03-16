import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex h-screen flex-col justify-start items-center p-2 border-4 border-[#000000] border-double">
      <h2 className="font-bold text-lg">Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>
            {item.quantity > 1 ? `${item.quantity}x` : ''} {item.title} 
            </span>
            - <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total:</span> <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
