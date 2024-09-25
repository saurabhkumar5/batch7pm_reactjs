import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Nasa() {

      const [data,setData]   = useState([])
      console.log(data)
      useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY")
        //  .then((value)=>console.log(value))
        .then((value)=>setData(value.data.photos))
      },[])

  return (
    <div>
     {
        data.map((value)=>{
            return(
                <>
                <img src={value.img_src}/>
                </>
            )
        })
     }
    </div>
  )
}

export default Nasa