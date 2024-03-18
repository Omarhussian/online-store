import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Home.module.scss'

const Cart = () => {
  const {items} = useSelector(state => state.CartSlice);

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex h-screen flex-col justify-start items-center  p-4 border-4 border-[#000000] border-double">
      <h2 className={styles.MenuTitles}>Shopping Cart</h2>
      <ul className='w-full'>
        {items.map((item, index) => (
          <li key={index} className='flex justify-between w-full p-4 border-b-4 border-[#000000] border-double'>
            <React.Fragment className='flex justify-start'>
              <span className='w-[20%]'>
                {item.quantity > 1 ? `${item.quantity} x` : '1 x'}
              </span>
              <span className='w-full'>
                {item.title}
              </span>
            </React.Fragment>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="border-b-4 border-[#000000] w-full flex justify-between p-4">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
