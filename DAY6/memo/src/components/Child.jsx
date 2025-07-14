import React from 'react'

const Child = ({username}) => {
    console.log("child rendering")
  return (
    <div>
        hello : {username}
    </div>
  )
}

export default React.memo(Child)