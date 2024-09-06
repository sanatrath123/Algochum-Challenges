import React, { useState } from 'react'
import  {files} from "./FileArray"


const File = () => {

 const newarr = files.children.map((item)=>{ 
 return  { name: item.name , status:false , children:item.children}
})


    const [active, setActive] = useState(false)
    const [folder , setFolder] = useState(newarr)

    const handleRootClick = ()=>{
setActive(!active)
    }

    const handleFolder = (val)=>{
        if(!val.children) return
const newArray = folder.map((item)=>{
    if(item === val ){
        return {...item , status:!item.status}
    }
    return item
}) 
setFolder(newArray)
    }


  return (
    <div className=' w-2/12 bg-gray-800 h-[99vh] absolute left-[1px]'>

<div className='flex flex-col w-full text-xl text-gray-100 font-medium'>
<span onClick={()=>handleRootClick()} className='flex mb-2 gap-2 cursor-pointer mx-3 mt-5'>{active ?<p>⬇️</p>:<p>➡️</p>}Root</span>
{
    active && <div className='w-10/12 mx-auto flex flex-col border-2 border-gray-100'>
{
    folder.map((item,i)=>(
        <div onClick={()=>handleFolder(item)} key={i} className='flex cursor-pointer text-xl ml-2 px-2 pt-2 relative '>
  <div className=' flex flex-wrap'>
  {
    item.children && (item.status ?<span className='h-6'>⬇️</span>:<p className='h-6'>➡️</p>)
   }
   <span className='flex h-6 mb-1 gap-2  ml-1'>{item.name}</span>

   {
    item.status && <div className='text-xl pt-2 mt-2 w-full mx-auto'>
        {
            item.children.map((subItem ,i)=> (

                <span key={i} className='w-8/12 flex mb-2 cursor-pointer items-center gap-3 mt-1 mx-auto justify-evenly '> {subItem.icon}
                    {subItem.name}</span>
            ))
        }
    </div>
  }

  </div>
  
        </div>
 ))
}
    </div>
}

</div>
    </div>
  )
}

export default File