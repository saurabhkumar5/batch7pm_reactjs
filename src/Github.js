import axios from 'axios'
import './Github.css'
import React, { useEffect, useState } from 'react'

function Github() {

     const [data,setData]  = useState([])
        console.log(data)
   useEffect(()=>{
    axios.get('https://api.github.com/users/saurabhkumar5')
    // .then((value)=>console.log(value.data))
    .then((value)=>setData(value.data))
   },[])

  return (
    <div>
        <img src={data.avatar_url} className='img1'/>
        <h1>name:{data.name}</h1>
        <h2>bio:{data.bio}</h2>
        <h1>followers:{data.followers}</h1>
        
    </div>
  )
}

export default Github