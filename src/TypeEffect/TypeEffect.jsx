import React, { useRef } from 'react'
import { useState } from 'react'
const TypeEffect = () => {

const [innerText , setInnerText] = useState('')
const text = "Also called Text Generate Effect, A Typewriter Effect is something where a piece of text constructs itself with some milliseconds in delay. You will see the text getting generated from start to finish. In this problem, create a Typewriter Effect from scratch using native React and/or Javascript functions."
const textarray = text.split(" ")
const timerIds = useRef([])
const intervalId = useRef(null)
const currentIndex = useRef(0)
const AddText = ()=>{
  //using setTimeout
  
//  textarray.forEach((item,i)=>{
// const timerId = setTimeout(()=>{
// setInnerText((prevtext)=>prevtext.concat(item+" "))
//   },150*i)
//  timerIds.current.push(timerId)
//  })

//using setinterval

clearInterval(intervalId)

 intervalId.current =  setInterval(()=>{
setInnerText((prevtext)=>`${prevtext} ${textarray[currentIndex.current]}`)
currentIndex.current +=1 
  

  if(textarray.length <= currentIndex.current){
    console.log("delete")
    clearInterval(intervalId.current)
  }
},150)

}

//reset function

const handleReset = ()=>{
  //for setTimeout
  // timerIds.forEach((id)=>{
  //   clearTimeout(id)
  // })
  // timerIds.current= []

  //for setInterval
  clearInterval(intervalId.current)
  currentIndex.current=0
  setInnerText('')
}



  return (
    <div className='w-full flex justify-center flex-col'>
        <h1 className='text-3xl font-bold mt-12 w-full text-center'>Generate The Text On The Go</h1>

        <div className='mx-auto'>
        <button className='px-4 py-2 mt-4  mr-3 bg-gray-200 text-xl rounded-xl hover:bg-gray-400'
        onClick={AddText}
        >START GENERATING</button>
        <button className='px-4 py-2 mt-4  mr-3 bg-gray-200 text-xl rounded-xl hover:bg-gray-400'
        onClick={handleReset}
        >RESET</button>
        </div>

        <div className='w-4/12 h-[30rem] bg-gray-500 rounded-2xl mt-8 mx-auto p-3'>
<div className='w-full h-full bg-gray-800 text-xl font-semibold text-gray-100 py-4 px-6'>
  {
    innerText ? innerText :<h1 className=' bg-black flex px-4 text-xl text-gray-100 w-full'>1.  **/Click on Generate to See the Magic</h1>
  }
</div>
        </div>
    </div>
  )
}

export default TypeEffect





