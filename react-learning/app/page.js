"use client"
import React, { useState } from 'react'
const page = () => {
  
  const [marks, setmarks] = useState(80)
  return ( <>
  <h1>Hellop</h1>
  <p>my marks is {marks}</p>
  <button onClick={()=>{
    setmarks(34)
  }}>change</button>
  </> );
}
 
export default page;