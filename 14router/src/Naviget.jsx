import React from 'react'
import { useNavigate} from 'react-router-dom'
const Naviget = () => {
    let navigate = useNavigate()
    const goHome=()=>{
        navigate('/')
    }
  return (
    <button onClick={goHome}>GO Home</button>
  )
}

export default Naviget