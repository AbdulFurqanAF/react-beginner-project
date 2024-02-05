import React from 'react'
import { useTheme } from "../context/ThemContext";


function Contact() {
 
   const {theme}= useTheme()

  return (
    <div className={`${theme}`}>
       <h1>This is Contact page</h1>
       <p>welcom contact page </p>
    </div>
  )
}

export default Contact
