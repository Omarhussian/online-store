import React from 'react'
import ListComponent from '../../base/ListComponent';
import styles from './Home.module.scss'

const ProductsList = () => {
 
  return (
    <div className='flex h-screen flex-col justify-start items-center p-2  border-4 border-[#000000] border-double overflow-y-auto '>
      <h1 className={styles.header}>Fish Store</h1>
      <h3 className={styles.SubHeader}>
        <span className='absolute top-4 -left-10 w-[36px] h-[1px] bg-black'></span>
        <span className='absolute top-4 -left-10 w-[36px] h-[1px] bg-black mt-1'></span>
        Our Products List
        <span className='absolute top-4 -right-10 w-[36px] h-[1px] bg-black'></span>
        <span className='absolute top-4 -right-10 w-[36px] h-[1px] bg-black mt-1'></span>
      </h3>
      <div className='w-full'>
        <ListComponent />
      </div>
    </div>

  )
}

export default ProductsList