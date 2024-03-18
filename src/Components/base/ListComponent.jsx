import React from 'react';
import { List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Lib/Redux/Slices/CartSlice';
import UnAvailable from './UnAvailable';
import styles from '../../Lib/Helpers/animations.module.scss'
import Image from '../../Assets/placeholders/image.png'


const ListComponent = () => {

  const  {data}  = useSelector(state => state.InventorySlice);
  const dispatch = useDispatch();

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className='!border-none !p-[2px] overflow-hidden relative'>
          {item.status === 'Unavailable' && (
            <div className={styles['unavailable-animation']}
              style={{ position: 'absolute', top: 80, left: 150, bottom:30 }}
            >
              <UnAvailable />
            </div>
          )}
          <div className='w-full flex gap-2 justify-evenly border-b-2 border-t border-[#000000] p-4'>
            <div>
              <img src={item.picture} className='h-28 w-32 object-cover' alt={item.title} onError={(e) => { e.target.src = Image }} />
            </div>
            <div className='w-[50%] flex flex-col gap-1 items-start'>
              <span className='font-bold text-lg line-clamp-2 w-[90%]' title={item.title} >{item.title}</span>
              <span title={item.description} className='line-clamp-2 break-words'>{item.description}</span>
              {item.status === 'Available' && (
                <button
                  className='border-[#000000] border w-28 hover:bg-black hover:text-white transition duration-300 ease-linear transform '
                  onClick={() => dispatch(addToCart(item))}
                >
                  ADD TO CART
                </button>
              )}
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
