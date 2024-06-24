import React, { useEffect } from 'react'
import { useState } from 'react'
import Acordian from './Acordian'

const MainPage = () => {
  
  const [ open , setOpen ] = useState(0)
 const a = [1,2,3,4,5,6,7]


  return (
    <div className='w-full h-screen bg-sky-300 flex'>
<ul className='m-auto border-2 border-gray-700 w-6/12 h-[60%]'>
{
  a.map((_ , i)=>(
    <Acordian
    key={i}
    setData = {setOpen}
    index={i}
    show = {
      open == i ? true : false
    }
    />
  ))
}


</ul>

    </div>
  )
}

export default MainPage