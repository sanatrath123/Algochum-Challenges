import React, { useState } from 'react'

const Acordian = (props) => {

//const [show , setShow ] = useState(false)

const {setData ,index , show } = props

const handleClick = ()=>{
    if(show){
      setData(null)
      return
    }
    setData(index)
}


  return (
   <li className='w-full mt-3 rounded-2xl bg-gray-100 flex flex-col'
   onClick={handleClick}
   >
    <li className='w-full h-10 mt-3 rounded-2xl bg-gray-100 flex'> <button 
     className='w-28 h-10 bg-violet-500 mx-auto'>CLICK ME </button> </li>
    { show &&
       <div className='w-full h-48 bg-gray-500'></div>}
    </li>
  )
}

export default Acordian