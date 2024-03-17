import React from 'react'
import InventoryItem from './InventoryItem'
import { useSelector } from 'react-redux';
const Inventory = () => {
  const data = useSelector(state => state.inventory.data);
  return (
    <div className='flex h-screen flex-col justify-start items-center p-4 border-4 border-[#000000] border-double'>
      {/* Title */}
      <div>
        <span className='text-2xl font-bold'>Inventory</span>
      </div>
      <div className='flex flex-col gap-y-4'>
        {data.map(product => (
          <InventoryItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Inventory