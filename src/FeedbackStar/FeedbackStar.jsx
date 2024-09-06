import  { useEffect, useRef, useState } from 'react'
import Star from './Star'
import Demo from './Demo'

const FeedbackStar = () => {
    const [ clicked , setClicked] = useState()
    const [hoverd , setHoverd ] = useState(0)

    const stars = new Array(5).fill("")

    useEffect(()=>{
        console.log(clicked)
    },[clicked])
    

  return (
    <div className="w-full min-h-screen flex justify-center bg-black items-center text-white">
<div className='flex gap-5'>
{
stars.map((_,i)=>(
 <Star key={i}
setData={(id)=>setClicked((prev)=> prev == id ? 0 : id)}
id={i+1}
cliked={clicked}
setHov={(id)=>setHoverd(id)}
hoverd={hoverd}
/>
))
}
</div>
    </div>
  )
}

export default FeedbackStar