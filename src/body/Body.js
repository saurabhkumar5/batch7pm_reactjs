import React from 'react'
import data from '../Data'
import Image from '../Image'
import './Body.css'

function Body() {
  return (
    <div>
        <div className='momo'>
           {
               data.map((value)=>{
                    // console.log(value)
                    return (
                         // <h1>{value.sector},{value.rating},<img src={value.img}/></h1>

                         <Image rating={value.rating} sector={value.sector} img={value.img}/>
                    )
               })
            }
           </div>
    </div>
  )
}

export default Body