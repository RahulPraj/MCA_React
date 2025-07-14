import React, { useState } from 'react'
import Child from './components/Child';

function App() {
  console.log("parent rendering");
  let[count,setCount] = useState(0);
  return (
    <div>
      <h1>count:{count}</h1>
      <button
      onClick={()=>setCount(count+1)} 
      >
        click me
      </button>
      <br />
      <Child username={count%2===0? "rahul":"raj"}/>
    </div>
  )
}

export default App