import React, { useEffect, useState } from 'react'

function Form() {
    const [name, setName] = useState("aman")
    const [number, setNumber] = useState(0)
     
        useEffect(()=>{
            console.log("sonam")
        },[number])
  return (
    <>
       <h1>Form</h1>
       <form >
        <label>name</label>
        <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}/><br/>
        <label>age</label>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button type='submit '></button>
       </form>
    </>
  )
}

export default Form