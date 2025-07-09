import React from 'react'

function App() {
  let a = 10;
  let b = "rahul"
  let c = true
  let arr = ["raj","ram","aman","priya","sheetal"]
  let obj = {
    name:"rahul",
    age:26,
    city:"Delhi"
  }
  return (
    <div>
      <h1>a</h1>
      <h1>"a"</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{JSON.stringify(c)}</h1>
      {/* <h1>{arr}</h1> */}
      {/* {
        arr.map((item,index)=>{
          return <h1>{item}</h1>
        })
      } */}

      {/* object */}
      {Object.entries(obj).map((key,value)=>{
      return <p key={key}>
        {key[1]}
      </p>
      })}

    </div>
  )
}

export default App