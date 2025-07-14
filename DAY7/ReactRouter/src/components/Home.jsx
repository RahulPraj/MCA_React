import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate();

    function handleClick(){
        navigate('/about')
    }

  return (
    <div>this is Home page
        <button onClick={handleClick}>Click to navigate About</button>
    </div>
  )
}

export default Home