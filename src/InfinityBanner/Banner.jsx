import React, {  useEffect, useState } from 'react'

const Banner = () => {

const [hoverd , setHoverd] = useState({
    left:false,
    right:false
})
const [NumArray , setNumArray] = useState([])
 const [pageNo , setpageNo] = useState(1)
 const [maxPage , setMax] = useState(null)

 const handlenext =()=>{
setpageNo(pageNo>=maxPage ? 1 : pageNo+1)
 }

 const handleprev =()=>{
    setpageNo(pageNo<=1 ? maxPage : pageNo-1)
 }


 useEffect(()=>{
    //this is i do to show when i get a data from fetch
setNumArray ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
 },[])

 useEffect(()=>{
    //after getting data i will count the page number
  setMax(Math.ceil(NumArray.length/3))
 },[NumArray])

const DispalyItems = NumArray.slice((pageNo-1)*3 , (pageNo*3))

  return (
    <div className='w-full h-screen bg-sky-300 flex '>

        <ul className='w-8/12 h-[70%] m-auto bg-gray-200 flex flex-nowrap justify-center gap-9 items-center relative'>
        <div className='absolute left-6 text-[70px] cursor-pointer '
onMouseEnter={()=>setHoverd((prev)=>(
    {...prev , left:true}
))} onMouseLeave={()=>setHoverd((prev)=>(
    {...prev , left:false}
))}

onClick={handleprev}
>◀️
    { hoverd.left &&
        <p className='text-lg text-gray-100 rounded-xl p-1 absolute bg-black top-[-25px] '> Go to Prev</p>}
</div>
{
   DispalyItems?.map((item)=>{
if(item > pageNo*3 || item<= (pageNo-1)*3) return
 return <li key={item} className='font-bold text-[130px] p-3 border-2 border-gray-800 bg-gray-500 text-gray-100 h-60 flex items-center w-60 justify-center '>{item}</li>
  }  )
}
<div className='absolute right-6 text-[70px] cursor-pointer '
onMouseEnter={()=>setHoverd((prev)=>(
    {...prev , right:true}
))} onMouseLeave={()=>setHoverd((prev)=>(
    {...prev , right:false}
))}
onClick={handlenext}
>▶️
    { hoverd.right &&
        <p className='text-lg text-gray-100 rounded-xl p-1 absolute bg-black top-[-25px] '> Go to Next</p>}
</div>
        </ul>
       
    </div>
  )
}

export default Banner