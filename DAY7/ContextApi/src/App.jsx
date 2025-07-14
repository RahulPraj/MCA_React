import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

//step-1 -> create context for user
const userContext = createContext();

function App() {
  const[user, setUser] = useState({name:"Yash khakhar"})
  return (
    <div>
      <userContext.Provider value={user}>
        <ChildA/>
      </userContext.Provider>
    </div>
  )
}

export default App
export {userContext}