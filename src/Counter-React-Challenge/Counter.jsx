
import React, { useEffect, useState } from 'react'

const Counter = (props) => {
  const {time} = props
 
const defaultTime = { hr:"00", min:"00" , sec:"00"}
const [timer , setTimer] = React.useState(defaultTime)
const [play , setPlay] = useState(true)
 const interId = React.useRef(null)


useEffect(()=>{

    if(!time){
        setTimer(defaultTime)
    }
    reset(interId.current)
    
    if(/^\d+$/.test(time)){
        setTimer(prevState=>({
            ...prevState , min:time
        }))

        setPlay(false)
        return
    }
},[time])

//timer play and handle it 

const handleTimer = ()=>{
    
    interId.current = setInterval(()=>{
    
   setTimer(prevState=>{

    if(!Number(prevState.min) && Number(prevState.sec)  == 1){
        
reset(interId.current)
return
    }

    if(Number(prevState.sec) == 0){
        return{
            ...prevState , min: Number(prevState.min)-1 ,sec:59
        }
    }
    else{
        return {
    ...prevState , sec:Number(prevState.sec)-1
        }
    }
   })
    },1000)
}


//reset function

const reset = (id)=>{
    setTimer(defaultTime)
    clearInterval(id)
    interId.current= null
}


  return (
   <div className='flex w-3/12 items-center mt-10'>
<img src="src/assets/play-button-svgrepo-com (1).svg"
       className='h-[3.5rem] bg-cyan-500 rounded-[32px]'
       alt="" 
       onClick={()=>{
    if(!play){
        handleTimer()
        setPlay(true)
    }}}
       />

    <h1 className='flex w-full justify-center text-cyan-500 text-5xl font-bold '>
     {`${timer?.hr}:${timer?.min}:${timer?.sec} `}
       </h1>
    
   </div>
  )
}

export default Counter