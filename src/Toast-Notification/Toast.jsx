import { retry } from '@reduxjs/toolkit/query'
import React, { useEffect, useRef, useState } from 'react'

const Toast = (props) => {
const id = Math.random().toString(36).substr(2,9)
    const [showToast , setShowToast]= useState(true)
const { setData } = props
const {icon , toastValue } = setData

    useEffect(()=>{
 const Id = setTimeout(()=>{
    setShowToast(false)
},5000)

return()=>clearTimeout(Id)
 },[showToast])

 
  return (
   
 <li 
    className={`bg-sky-500 px-5 w-full h-12 rounded-2xl  text-xl text-gray-100 font-bold  flex items-center justify-center relative  ${!showToast && "hidden"}` }> 
    
    {icon} {toastValue}

    <img src="src/assets/icons8-settings.gif" 
    className='h-8 rounded-xl bg-transparent absolute right-2'
    onClick={()=>{
      setShowToast(false)
    }}
    alt="delete" />
</li>
  
  )
}

export default Toast


