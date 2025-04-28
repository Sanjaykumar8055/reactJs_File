import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Mains from './Mains'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Product } from './Product'
import Class from './Class'

function App() {
  let data = {
    name:"sanju",
    age:22,
    sty:"amd"
  }
  let userInfo ={
    email:"vipul@gamil.com",
    phon:6351550376
  }
   return (
    <>
    <Header name="Vipul Mali" data={data} />
    <Class data={data} />
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
    {Product.map((i,v)=>{
      return (
        <Mains i={i} key={v} />
      )
    }) }
    </div>
   
    
   
    <Footer userInfo={userInfo}> 
      <h3>This is an Example of how to excise prent component tag in child? Using children key words </h3>
    </Footer>
    </>
  )
}

export default App
