import React, { useEffect } from 'react'
import { items as defalultIteams } from './FilterItems'
import { useState } from 'react';
const Multiplefilter = () => {

    let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
const [ activefilter , setActivefilter] = useState([])

const [ filterIteam , setFilterIteam] = useState([...defalultIteams])

// debugger
const handleClick = (item)=>{
 if(activefilter.includes(item)){
    const newActiveFilter = activefilter.filter((category)=> category !== item)

    setActivefilter(newActiveFilter)
    return
 }

 setActivefilter((prevValue)=>[...prevValue, item])


}


const handleFilterItem = ()=>{
    if(activefilter.length==0 || activefilter.length==4){
     setFilterIteam(defalultIteams)
     return
    }

   const newFilterItem = defalultIteams.filter((item)=>{
  if(activefilter.includes(item.category)) return item
    })
console.log(newFilterItem)
    setFilterIteam([...newFilterItem])
}

useEffect(()=>{
    // debugger
handleFilterItem()
},[activefilter])


  return (
    <div className='w-full mt-12'>
        <h1 className='text-3xl font-bold text-center'>ALGOCHURM MULTIPLE-FILTERS</h1>

        <ul className='flex w-5/12 text-xl font-semibold justify-between mx-auto mt-8 '>
            {
                filters.map((item ,i)=>(
                    <li key={i}
                    className={`border-[1px] border-gray-700 rounded-xl px-4 py-3 ${activefilter.includes(item) && "bg-slate-700 text-gray-100"} `}
                    onClick={()=>handleClick(item)}
                    >{item}</li>
                ))
            }
            
        </ul>


        <ul className='flex flex-wrap justify-between w-full text-xl mx-auto mt-9'>
            {
                filterIteam.map((item,i)=>(
                    <li
                    key={i}
             className='flex flex-col m-3 bg-slate-300 w-2/12 border-[1px] border-gray-700 rounded-xl px-2'>
                <h2 className='pt-2 pb-4 font-semibold'>{item.name}</h2>
                <span className='py-2 text-md'>{item.category}</span>
            </li>
                ))
            }

        </ul>
    </div>
  )
}

export default Multiplefilter