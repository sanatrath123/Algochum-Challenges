import React, { useEffect, useState } from 'react'

const useMove = () => {
    const [position , setPosition] = useState({
        x:0 , y:0
    })
  
useEffect(()=>{
    const HandleMouseMove = ({clientY , clientX })=>{
setPosition({x:clientX , y:clientY})
    }

    document.addEventListener('mousemove' , HandleMouseMove)

    return()=>{
        window.removeEventListener('mousemove' , HandleMouseMove)
    }
},[])

return position 
}

export default useMove