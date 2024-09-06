import React, { useRef, useState } from 'react'

const Demo = ({id , setData , cliked ,setHov ,hoverd }) => {

    const handleClick = ()=>{
       setData(id)
    }

    //${cliked>=id ?"bg-sky-500" : "bg-red-700" }
    
  return (
    <div
    onMouseEnter={()=>setHov(id)} onMouseLeave={()=>setHov(0)}
    onClick={handleClick} id={id} className={`w-9 h-9 rounded-xl 
       `}></div>
  )
}

export default Demo