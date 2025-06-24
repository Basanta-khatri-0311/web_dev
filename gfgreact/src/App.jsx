import React from 'react'
import SearchBrand from './components/SearchBrand'
import AddToCart from './components/AddToCart'
import SelfSearchBrand from './components/SelfSearchBrand'
import SelfAddToCart from './components/SelfAddToCart'
import WishList from './components/WishList'
import SelfWishList from './components/SelfWishList'


function App() {
  return (
    <div className='container'>
      {/* <SearchBrand/>
      <AddToCart/> */}
      {/* <SelfSearchBrand/> */}
      {/* <SelfAddToCart/> */}
      {/* <WishList/> */}
      <SelfWishList/>
    </div>
  )
}

export default App