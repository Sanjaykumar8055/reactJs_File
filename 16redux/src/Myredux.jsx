import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Add, Minas } from './Redux/CounterAction'

const Myredux = () => {
  const dispatch = useDispatch()
  const deta = useSelector((state=>state.count))
  return (
  <>
  <h1>Counter</h1>
  <h3>{deta}</h3>
  <button onClick={()=>dispatch(Minas())}>Minas</button>
  <button onClick={()=>dispatch(Add())}>Add</button>
   
  </>
  )
}

export default Myredux