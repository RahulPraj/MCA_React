import React from 'react'

function Child({click}) {
    console.log("child rendering")
  return (
    <div>
        <h1>child component</h1>
        <button onClick={click}>click child</button>
    </div>
  )
}

export default React.memo(Child)