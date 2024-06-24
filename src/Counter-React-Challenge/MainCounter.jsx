import React from 'react'
import Counter from './Counter'

const MainCounter = () => {

    const [input , setInput] = React.useState()

    const handleChange = (e)=>{
      
setInput(e.target.value)
    }

  return (
    <div className='w-full h-screen  bg-slate-700 flex justify-center items-center flex-col'>
 <div className='flex w-full flex-col items-center relative'>
    <span className='text-lg font-medium text-cyan-500 absolute left-[38%] top-[-30px] '>Enter Minutes</span>
    <input type="text"
     className='w-3/12 h-12 border border-gray-100 
      px-4 py-2 bg-transparent text-2xl text-gray-100 font-semibold'
     onChange={handleChange}
    />
    </div>

{/* Counter Logic */}

<Counter time={input}/>

    </div>
  )
}

export default MainCounter