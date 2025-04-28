import React from 'react'
import { useState } from 'react'

const Usestate = () => {
  const[count,setCount]=useState(0)
  const updata =()=>{
     setCount(count+1)
  }
  const decre =()=>{
    if (count>0) {
      setCount(count-1)
    }
  }
  
  return (
    <>
    <p>{count}</p>
    <button onClick={updata}>increment</button>
    <button onClick={decre}>decrement</button>
    </>
  )
}

export default Usestate