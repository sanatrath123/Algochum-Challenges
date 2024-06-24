import React from 'react'
import { useState } from 'react'
const InputTextP1 = () => {


  const[input , setInput ] = useState('')
const [textBox , setTextBox ] = useState([])
const [highlight , setHighlight] = useState(false)

  const handleChange = (e)=>{
if(e.key !== "Enter") return

setTextBox([...textBox,input])
setInput('')
setHighlight(true)
setTimeout(()=>{
  setHighlight(false)
},2000)

  }


  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>

<input type="text" 
className='w-5/12 min-h-16 text-2xl font-bold text-gray-100 px-4 rounded-2xl bg-gray-300'
placeholder='ENTER THE INPUT TEXT'
value={input}
onChange={(e)=>setInput(e.target.value)}
onKeyDown={handleChange}
 />

 <div className='w-6/12 min-h-32 bg-orange-400 text-2xl font-bold text-gray-800 mt-7 flex flex-col'>
{
  textBox.map((item,i)=>(
    <span key={i}
     className={`text-2xl font-bold ${i == textBox.length-1 && highlight ? "text-blue-400" : "text-gray-800"}`}>{item}</span>
  ))
}
 </div>
    </div>
  )
}

export default InputTextP1