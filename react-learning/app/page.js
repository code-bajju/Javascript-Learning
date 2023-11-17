"use client"
import React, { useState } from 'react'
import Header from '@/components/header';
import JsonFetch from '@/components/JsonFetch';

const page = () => {
  
  const [marks, setmarks] = useState(80)
  const [user, setUser] = useState("bajrang")
  return ( <>
  <Header user={user}/>
  <JsonFetch/>
  <h1>Hellop</h1>
  <p>my marks is {marks}</p>
  <button onClick={()=>{
    setmarks(34)
  }}>change</button>
  </> );
}
export default page;