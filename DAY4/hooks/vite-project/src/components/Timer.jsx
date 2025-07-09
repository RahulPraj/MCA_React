import React, { useEffect, useState } from 'react'

function Timer() {
   let[time, setTime]= useState(0);

   //wrong approach
//    useEffect(()=>{
//     let id = setInterval(()=>{
//         console.log("intervel running ",time)
//         setTime(time+1);
//     },1000)
//     return ()=>{
//         console.log("cleaning running");
//         clearInterval(id);
//     }
//    },[time])

//write approach-way1
  useEffect(()=>{
    let id = setInterval(()=>{
        console.log("intervel running ",time)
        setTime(prev => prev+1);
    },1000)
    return ()=>{
        console.log("cleaning running");
        clearInterval(id);
    }
   },[])

//way2
  useEffect(()=>{
    let id = setInterval(()=>{
        // console.log("intervel running ",time)
        setTime(prev => {
            if(prev >= 10){
                console.log("previous value ",prev);
                clearInterval(id);
                return prev;
            }
            return prev+1
        });
    },1000)
    return ()=>{
        console.log("cleaning running");
        clearInterval(id);
    }
   },[])


  return (
    <div className='text-center text-2xl font-semibold text-blue-600 bg-white p-4 rounded-md w-60 mx-auto mt-10'>
        Timer:{time}
    </div>
  )
}

export default Timer