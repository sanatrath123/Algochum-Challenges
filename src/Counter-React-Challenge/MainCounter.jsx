import React, { useState } from 'react'
import Counter from './Counter'
const MainCounter = () => {

const [ inputTime , setInput] = useState(null)

const handleChange = (e)=>{
  const {value} = e.target
  setInput(value)
}

  return (
    <div
    className='w-full h-screen bg-slate-700 flex '
    >

<div className='w-5/12 h-[20%]  flex m-auto flex-wrap'>
<input
className='mx-auto h-16 my-6 w-10/12 px-4 py-3 text-gray-100 font-bold text-2xl bg-transparent rounded-3xl border-2 border-gray-100'
placeholder='Enter Time in Min'
type="text" 
onChange={handleChange}
/>

<Counter
InputTime = {inputTime}
/>

</div>

    </div>
  )
}

export default MainCounter