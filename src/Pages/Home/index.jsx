import React from 'react'
import ProductsList from '../../Components/PageSpecific/Home/ProductsList'
import Cart from '../../Components/PageSpecific/Home/Cart'
import Inventory from '../../Components/PageSpecific/Home/Inventory'
const Home = () => {
  return (
    <div className='h-screen grid grid-cols-3 justify-center items-center p-2'>
      <div>
        <ProductsList />
      </div>
      <div>
        <Cart />
      </div>
      <div>
        <Inventory />
      </div>
    </div>
  )
}

export default Home