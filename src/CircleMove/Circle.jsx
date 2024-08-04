import React, { useState } from 'react'
import useMove from './useMove'
const Circle = () => {

    const {x,y} =useMove()
    console.log(x ,y )
   

  return (
    <div className='w-full h-screen bg-gray-800'>

        <div className='lg:h-20 lg:w-20 h-12 w-12 border-2 border-gray-100 rounded-full absolute '
          style={{top:`${y}px` , left:`${x}px` ,transform:`translate(-50% ,-50%)`}}
        
    ></div>
    </div>
  )
}

export default Circle



