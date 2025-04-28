import React from 'react'

const Header = (props) => {
  let {data}=props;  //destructure
  return (
   <>
   <h2>My name is {props.name}.</h2>
    <h2>{data.name}</h2>
    <h2>{data.age}</h2>
   
   </>
  )
}

export default Header