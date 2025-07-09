import React, { useEffect, useState } from 'react'

function UseEffect() {
   let[count, setCount] =useState(0)


    useEffect(()=>{
        alert('hii i am rahul')
        console.log("running useEffect hook",count)
    },[count])

    const addValue = ()=>{
        setCount(count+1)
    }

  return (
    <div>
        <h1>i am learning UseEffect </h1>
        <div>
            <h1>counter:{count}</h1>
            <div>
                <button onClick={addValue}>click</button>
            </div>

        </div>
    </div>
  )
}

export default UseEffect