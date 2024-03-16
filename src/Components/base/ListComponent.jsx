// ListComponent.js
import React from 'react';
import { List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Lib/Redux/Slices/CartSlice';

const ListComponent = () => {
  const data = useSelector(state => state.inventory.data);
  const dispatch = useDispatch();
  
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className='!border-none !p-[2px]'>
          <div className='w-full flex gap-2 justify-evenly border-b-2 border-t border-[#000000] p-4'>
            <div>
              <img src={item.picture} className='h-28 w-32 object-cover' alt={item.title} />
            </div>
            <div className='w-[60%] flex flex-col gap-1  items-start'>
              <span className='font-bold text-lg'>{item.title}</span>
              <span>{item.description}</span>
              <button 
                className='border-[#000000] border w-28 hover:bg-black hover:text-white transition duration-300 ease-linear transform '
                onClick={() => dispatch(addToCart(item))}
              >
                ADD TO CART
              </button>
            </div>
            <div>
              <span>{'$' + item.price.toFixed(2)}</span>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
