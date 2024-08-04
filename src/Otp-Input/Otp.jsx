import React, { useRef, useState } from 'react'


const Otp = () => {

const [input , setInput ] = useState( new Array(4).fill('')
)
const focus = useRef([input])

const handleChange = (e)=>{
  console.log(e.target.value)
}


  return (
    <div className='flex gap-6'>

{
  input.map((value,i)=>(
  <input
  key={i}
  type='text'
  className='h-16 w-16 border-2 rounded-xl border-gray-400  '
  value={value}
  onChange={handleChange}
  />
  ))

}




    </div>
  )
}

export default Otp