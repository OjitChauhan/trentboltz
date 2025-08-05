import React from 'react'
import Nav from './Components/Nav'
import Cursol from './Components/cursol'
import "./App.css"

import Customer from './Components/Customer'
import Company from './Components/Company'
import News from './Components/News'
import Card from './Components/Card'
import Cart22 from "./Components/Cart22"
import Footer from './Components/Footer'
import Products from './Components/Products'
import Desk from './Components/Desk'




const App = () => {
  const [searchh,setSearchh]=React.useState(false)
  
  return (
    <div className={` ${searchh?"bg-[#040720]":"bg-white"}  w-screen `} style={{padding:0,margin:0,boxSizing:'border-box',overflow:'hidden'}}>
      <Nav  searchh={searchh} setSearchh={setSearchh}/> 
     
      
      <Cursol searchh={searchh} />
      <Desk/>
    
      <Customer  searchh={searchh}/>
      <Card/>
       <Products searchh={searchh}/>
       <Cart22/>
       <News  searchh={searchh}/>
         <Company />
       <Footer searchh={searchh}/>
      
       
    </div>
  )
}

export default App

