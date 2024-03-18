import React from 'react'
import ListComponent from '../../base/ListComponent';
import styles from './Home.module.scss'

const ProductsList = () => {
 
  return (
    <div className='flex h-screen flex-col justify-start items-center p-2  border-4 border-[#000000] border-double overflow-y-auto '>
      <h1 className={styles.header}>Fish Store</h1>
      <h3 className={styles.SubHeader}> Our Products List</h3>
      <div className='w-full'>
        <ListComponent />
      </div>
    </div>

  )
}

export default ProductsList