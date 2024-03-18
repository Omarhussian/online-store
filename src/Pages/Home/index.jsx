import React from 'react'
import ProductsList from '../../Components/PageSpecific/Home/ProductsList'
import Cart from '../../Components/PageSpecific/Home/Cart'
import Inventory from '../../Components/PageSpecific/Home/Inventory'

const Home = () => {

  return (
    <div className='h-screen grid lg:grid-cols-[repeat(3,minmax(300px,1fr))] md:grid-cols-[repeat(2,minmax(300px,1fr))] '>
      <div>
        <ProductsList />
      </div>
      <div >
        <Cart />
      </div>
      <div className='w-full' >
        <Inventory />
      </div>
    </div>
  )
}

export default Home