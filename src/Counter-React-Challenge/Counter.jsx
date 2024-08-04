import React, { useEffect, useState } from 'react'

const Counter = (props) => {

    let {InputTime} = props
 const defalutTime = {hr:0 , min:0 , sec:0}
const [time , setTime ] = useState(defalutTime)

useEffect(()=>{

setTime((prev)=>(
    {...prev , min:InputTime}
))
},[InputTime])

//handle counter
const HandleCounter = ()=>{
  const Id  = setInterval(()=>{
setTime((prev)=>{
  if(prev.sec<=1 && prev.min ===0){
    clearInterval(Id)
return {...prev , ...defalutTime}
  }

  if(prev.sec<=1 && prev.min >0) return {...prev , min:prev.min-1, sec:10}

  if(prev.sec>1) return {...prev , sec:prev.sec-1}

  else{
   return {...prev , ...defalutTime}
  }

})
  },1000)

  return (()=>clearInterval(Id))
}

  return (
<div className='text-6xl text-sky-600 flex m-auto font-bold'>
  <img className='h-12 my-auto mr-5' src="src/assets/play.png" alt=""
  onClick={HandleCounter}
  />
<span>{time.hr? time.hr:"00"}</span> :<span>{time?.min ?time.min: "00"}</span>: <span>{time?.sec ? time.sec : "00"}</span> 
</div>
  )
}

export default Counter