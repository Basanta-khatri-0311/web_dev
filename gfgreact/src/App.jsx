import React from 'react'
import SearchBrand from './components/SearchBrand'
import AddToCart from './components/AddToCart'
import SelfSearchBrand from './components/SelfSearchBrand'
import SelfAddToCart from './components/SelfAddToCart'


function App() {
  return (
    <div className='container'>
      {/* <SearchBrand/>
      <AddToCart/> */}
      {/* <SelfSearchBrand/> */}
      <SelfAddToCart/>
    </div>
  )
}

export default App