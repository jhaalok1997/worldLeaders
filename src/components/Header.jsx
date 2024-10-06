import { useState } from "react"
import React from 'react'
//import Toggle from "../store/toggle.png"


export const Header = () => {
   const[darkmode,setDarkMode]=useState(false)

  // const backgroundstyle={
    //backgroundColor: darkmode ? '#333' : '#fff' , minHeight: '10vh',
    //transition: 'background-Color 0.3s ease'
   //}
  return (
    <>
    <header className="header-container">
       <div className="header-content">
        <h2 className="title"><a href="/">Global leaders of the world</a></h2>
        <p className="theme-changer"> 
          { 
          //        <img src={Toggle} alt="toggle button" onClick={()=>setDarkMode(true)}/>
               
          }
          
          
         
        </p>
       </div>
    </header>
    </>
  )
}
