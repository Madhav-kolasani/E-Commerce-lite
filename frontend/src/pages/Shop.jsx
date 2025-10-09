import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
    </div>
  )
}

export default Shop