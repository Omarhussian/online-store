import React from 'react'
import InventoryItem from './InventoryItem'
import AddToInventory from './AddToInventory';
import { useSelector } from 'react-redux';
import styles from './Home.module.scss'

const Inventory = () => {
  const { data } = useSelector(state => state.InventorySlice);
  return (
    <div className='flex h-screen flex-col gap-y-4 justify-start items-center p-4 border-4 border-[#000000] border-double overflow-y-auto'>
      {/* Title */}
      <div>
        <span className={styles.MenuTitles}>Inventory</span>
      </div>
      <div className='flex flex-col gap-y-4'>
        {data.map(product => (
          <InventoryItem key={product.id} product={product} />
        ))}
      </div>
      <div>
        <AddToInventory />
      </div>
    </div>
  )
}

export default Inventory