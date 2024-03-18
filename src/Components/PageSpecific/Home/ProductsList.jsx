import React from 'react'
import ListComponent from '../../base/ListComponent';
const ProductsList = () => {
  const headerStyle = {
    fontFamily: 'Tourney, sans-serif', 
    fontWeight: 500, 
    fontSize: '3rem', 
    color: '#000000', 
  };
  return (
    <div className='flex h-screen flex-col justify-start items-center p-2  border-4 border-[#000000] border-double overflow-y-auto '>
      <h1 style={headerStyle}>Fish Store</h1>
      <h3 className='text-[#f7b885]'> Our Products List</h3>
      <div className='w-full'>
        <ListComponent />
      </div>
    </div>

  )
}

export default ProductsList