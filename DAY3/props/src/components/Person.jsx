import React from 'react'

function Person({username, color,kam}) {
  return (
    <div>
        <h1>{username}</h1>
        <h2>{color}</h2>
        <h3>{kam}</h3>
    </div>
  )
}

export default Person