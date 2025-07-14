import React, { useContext } from 'react'
import { userContext } from '../App'

function ChildC() {
    const user = useContext(userContext);
  return (
    <div>ChildC kon hai:{user.name}</div>
  )
}

export default ChildC