import React from 'react'
import ProductsList from '../../Components/PageSpecific/Home/ProductsList'
import Cart from '../../Components/PageSpecific/Home/Cart'
import Inventory from '../../Components/PageSpecific/Home/Inventory'

// here is home component renders the main layout of the home page

const Home = () => {
    // here is main container div with grid layout

  return (
    <div className='h-screen grid lg:grid-cols-[repeat(3,minmax(300px,1fr))] md:grid-cols-[repeat(2,minmax(300px,1fr))] '>
      <div>
        <ProductsList />
      </div>
      <div >
        <Cart />
      </div>
      <div  >
        <Inventory />
      </div>
    </div>
  )
}

export default Home