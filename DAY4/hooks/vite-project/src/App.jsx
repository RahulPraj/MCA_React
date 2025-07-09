import React, { useState } from 'react'
import UseState from './components/UseState'
import BgChnager from './components/BgChnager'
import UseEffect from './components/UseEffect'
import Timer from './components/Timer'

function App() {
 let[showTimer, setShowTimer] =useState(true);

  return (
    <div className='text-center mt-10'>
      {/* <UseState/> */}
      {/* <BgChnager/> */}
      {/* <UseEffect/> */}
      
    <button
    onClick={()=> setShowTimer(!showTimer)}
    className='bg-blue-600 text-white px-4 py-2 rounded '
    >
      {showTimer ? "stop timer":"start timer"}
    </button>
    {showTimer && <Timer/>}
    </div>
  )
}

export default App