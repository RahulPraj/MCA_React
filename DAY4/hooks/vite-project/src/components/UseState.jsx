import React, { useState } from 'react'

function UseState() {
   let[count, setCount] =useState(0);
    // let count = 0;
    const addValue = ()=>{
        // count = count+1;
        setCount(pev => pev+1)
        setCount(pev => pev+1)
        setCount(pev => pev+1)
        setCount(pev => pev+1)
        console.log("my count is :"+count);
    }

  return (
    <>
        <h1>Counter App</h1>
        <h2>counter:{count}</h2>
        <button onClick={addValue}>Increase</button>
    </>
  )
}

export default UseState