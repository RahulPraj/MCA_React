import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    console.log("parent rendering")
   let[count , setCount] =useState(0);
   let[childCount, setChildCount] = useState(0);

   const handleClick= useCallback(()=>{
    console.log("child value");
    setChildCount(prev => prev+1)
   },[])

  return (
    <div>
        <h1>parent count:{count}</h1>
        <h1>child click:{childCount}</h1>
        <button
        onClick={()=> setCount(count+1)}
        >
            parent Inc
        </button>
        <br />
        <Child click = {handleClick}/>

    </div>
  )
}

export default Parent