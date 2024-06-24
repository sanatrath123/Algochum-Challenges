import React, { useEffect } from 'react'
import { list } from './Mockdata'
import { useState } from 'react'


//select individusal cheecklist
const SelectList = () => {


    const [selected , setSelected] = useState([])
 const [selectAll , setSelectAll] = useState(false)


const handleClick = (e)=>{

   const newSelect = selected.includes(e)
   ?
 selected.filter((item)=>(
    item.id != e.id
))  : 
 [...selected, e]

setSelected(newSelect)
}

// const handleClick = (e) => {
//     setSelected(prevSelected => (
//         prevSelected.includes(e)
//             ? prevSelected.filter(item => item.id !== e.id)
//             : [...prevSelected, e]
//     ));
// };


//selectAll

const handleAll = ()=>{
   selectAll ? setSelected(list) : setSelected([])
}



  return (
    <div className='w-full  flex flex-wrap items-center mt-32'>
        <h1 className=' font-semibold text-2xl w-full text-center mb-9'>CHECKBOX LIST</h1>
        <div className='w-5/12 flex flex-col bg-gray-100 border-gray-500 shadow-2xl rounded-2xl h-96 mx-auto overflow-hidden'>

<div className='w-full h-12 bg-gray-300 flex align-middle px-6'>
<input type="checkbox" 
onChange={()=>{
    setSelectAll(!selectAll)
    handleAll()
}}
className='w-5 h-5 my-auto' />

<label htmlFor="" className='my-auto ml-4 text-xl '>SELECT ALL</label>
</div>

<ul className='flex flex-wrap'>
    {
        list && list.map((item)=>(
            <li key={item.id}
             className='w-full mt-4 flex align-middle'>
    <input type="checkbox" value={item} onChange={()=>handleClick(item)}  className='w-5 h-5 ml-6 my-auto'
    checked={selected.includes(item)}
    />
<label htmlFor="" className='w-8/12 px-3 text-lg font-medium my-auto'>{item.name}</label>
</li>
        ))
    }
</ul>

</div>
    </div>
  )
}

export default SelectList