import React from 'react';
import { List } from 'antd';

const ListComponent = () => {
  const data = [
    {
      title: "Grilled Salmon",
      description: "Grilled salmon served with lemon and herbs.",
      picture: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
      price: 14.99,
      status: 'available'
    },
    {
      title: "Fish Tacos",
      description: "Delicious fish tacos topped with salsa and avocado.",
      picture: "https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
      price: 10.99,
      status: 'available'
    },
    {
      title: "Seafood Paella",
      description: "Traditional Spanish seafood paella with shrimp, mussels, and squid.",
      picture: "https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
      price: 18.99,
      status: 'available'
    }
  ];

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
              <button className='border-[#000000] border w-28 hover:bg-black hover:text-white transition duration-300 ease-linear transform '>ADD TO CART</button>
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
