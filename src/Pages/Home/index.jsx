import React from 'react'
import ProductsList from '../../Components/PageSpecific/Home/ProductsList'
import Cart from '../../Components/PageSpecific/Home/Cart'
import Inventory from '../../Components/PageSpecific/Home/Inventory'
const Home = () => {
  return (
    <div className='h-screen grid grid-cols-5 grid-rows-5 lg:grid-cols-[repeat(autofill,minmax(300px,1fr))] '>
      <div className="col-span-2 row-span-5 ">
        <ProductsList />
      </div>
      <div className="col-span-1 row-span-5 ">
        <Cart />
      </div>
      <div className="col-span-2 row-span-5">
        <Inventory />
      </div>
    </div>
  )
}

export default Home