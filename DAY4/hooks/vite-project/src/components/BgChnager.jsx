import React, { useState } from 'react'

function BgChnager() {
   let[color, setColor] =useState("white");

  return (
    <>
        <div className='w-full h-screen 'style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
                    <button
                    onClick={()=> setColor("red")}
                    className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
                    style={{backgroundColor: 'red'}}
                    >
                        red
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default BgChnager