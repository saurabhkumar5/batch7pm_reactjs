import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Api() {
  
        const[data, setData]   = useState([])
        console.log(data)
        
         useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((value)=>{
              // console.log(value.data)
              setData(value.data)
          })
         },[])

  return (
    <>
    {
      data.map((data)=>{

        return (
          <>
           <h1>{data.name}, email:{data.email}</h1>
           <h1>username:{data.username}</h1>
          </>
        )
      })
    }
    </>
  )
}

export default Api;