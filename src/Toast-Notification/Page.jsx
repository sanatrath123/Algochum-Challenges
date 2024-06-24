import React, { useEffect, useState } from 'react'
import Toast from './Toast'

const Page = () => {

const [ countToast , setCount] = useState([])
// const [position , setPosition] = useState('top-2')
// const [toastValue , setValue ] = useState('')
// const [icon , setIcon] = useState('🔥')
const defaultToast = {
  position: "top-2",
  toastValue: "",
  icon: "🔥"

}
const [ toastInfo , setToastInfo ] = useState(defaultToast)


const handlePosition =(e)=>{
  
  const {name , value } = e.target
   setToastInfo(prev=>(
    {...prev , [name]: value}
   ))
}


const handleInput = (e)=>{
  const {name , value }= e.target
  setToastInfo(prev=>(
    {...prev , [name]:value}
  ))
}

const handleIcon = (e)=>{
  const {name , value }= e.target
  setToastInfo(prev=>(
    {...prev , [name]:value}
  ))
}

  return (
    <>
    <div className='bg-gray-200 border-2 border-gray-600 rounded-xl h-96 w-96 flex flex-col  gap-4 justify-between pt-7 items-end pb-10'>

<input
name='toastValue'
placeholder='Enter The Toast Input'
className='w-11/12 p-2 mx-auto rounded-2xl text-xl'
onChange={handleInput}
/>

    <select className='w-11/12 p-2 mx-auto rounded-2xl' name="position" id=""
      onChange={handlePosition}
      >
      <option value="top-2 left-2">Top-Left</option>
      <option value="bottom-2 left-2">Bottom-Left</option>
      <option value="top-2 right-2">Top-Rigth</option>
      <option value="bottom-2 right-2">Bottom-Right</option>
      </select>


      <select className='w-11/12 p-2 mx-auto rounded-2xl text-xl' name="icon" id=""
      onChange={handleIcon}
      >
      <option value="🔥">🔥</option>
      <option value="✅">✅</option>
      <option value="❌">❌</option>
      <option value="💀">💀</option>
      </select>

    

<button className='w-32 mx-auto h-12 bg-violet-500 text-xl text-gray-100 rounded-2xl'
onClick={()=>{
    setCount(prev=>[...prev ,{}])

}}
>Show Toast </button>
</div>

    <ul className={` w-3/12 absolute flex flex-col gap-2  ${toastInfo.position}`} >
    {
        countToast && countToast.map((_, i)=>
            (
               <Toast
              setData= {toastInfo}
               key={i}
               />
            ))
        
    }
    </ul>



    </>
  )
}

export default Page