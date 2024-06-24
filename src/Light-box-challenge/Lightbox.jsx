import React from 'react'
import {images} from './img'
import { useState } from 'react'
import { useRef } from 'react'


const Lightbox = () => {

    const [indiImg , setIndiImg] = useState(null)
 const divref = useRef(null)
 const imgref = useRef(null)

 const handleClick = (e)=>{

    if(divref.current && divref.current === e.target ){
        setIndiImg(null)
    }
    if(imgref.current && imgref.current === e.target){ setIndiImg(null)
 }}

//  const handlePropagation = (e)=>{
//     e.stopPropagation();
//  }

  return (
    <div className='bg-gray-100 flex flex-wrap justify-center w-9/12 my-8 gap-5' >
{
    images.map((img,i)=>(
        <img
        key={i}
        src={img} 
        onClick={()=>setIndiImg(i)}
        alt="" className='h-80 max-w-[225px] ml-2 my-2' />
    ))
}

{/* indivisual image page  */}
{
    indiImg!== null && <div className='backdrop-blur-sm bg-white/10 fixed inset-0 flex flex-col w-full  h-[95%] overflow-hidden mx-3'
    onClick={(e)=>handleClick(e)}
    ref={divref}
    >


    <img
    className='bg-blue-500 shadow-xl  shadow-blue-500/80 h-80 rounded-xl  m-auto'
    src={images[indiImg]} alt="" 
    ref={imgref}
    />
    
    <div className='bg-transparent h-20 m-auto rounded-2xl flex gap-1 lg:gap-3'
    // onClick={handlePropagation}
    >
    {
        images.map((img,i)=>(
            <img  key={i}
            className='h-full rounded-xl hover:bg-blue-500 hover:shadow-xl  hover:shadow-blue-500/80 hover:border-2 hover:border-blue-600 hover:opacity-50' src={img} 
            onClick={()=>setIndiImg(i)}
            alt="" />
        ))
    }
    
    </div>
    
    </div>
}

    </div>


  )
}

export default Lightbox