import { FlatTree } from 'framer-motion'
import React, { useState ,useEffect } from 'react'

const Todo = () => {

const [todos , setTodo] = useState([])
const [input , setInput ] = useState("")
const [edit , setEdit ] = useState({
  index:"", active:false
})

//adding input
const handleChange = (e)=>{
    setInput(e.target.value)
}


//handle add 
const handleAdd = ()=>{
    setTodo((prev)=>{
        return [...prev , input]
    })

    setInput('')
    
}

//delete todo
const handledelete = (index)=>{
    const newTodo = todos.filter((todo,i)=> i !== index)
    setTodo(newTodo)
    }



//handle edit 
const handleEdit = (index)=>{
  const editValue = todos.filter((_ , i)=>i== index)
 setInput( editValue[0])
 setEdit((prev)=>{
  return {...prev ,index:index, active:true}
})

}

//addEdit
const AddEdit = ()=>{

const editedArray = todos.map((item ,i)=>{
  if(i !== edit.index) return item
 return input
})

setTodo(editedArray)

  setEdit((prev)=>{
    return {...prev ,index:null , active:false}
  })

}

  return (
    <div className='flex w-5/12 bg-sky-300 min-h-96 flex-col'>

        <h1 className='text-3xl font-bold mx-auto'>WRITE YOUR TODO</h1>

      <div className='w-full flex justify-center mt-5'>
      <input type="text" className='w-8/12 py-2 px-4 rounded-xl text-gray-100 bg-gray-600 text-2xl'
        placeholder='ENTER THE TODO'
        onChange={handleChange}
        value={input}
        />

        {
          edit.active ?
          <button onClick={AddEdit}
          className='w-28 ml-5  h-12 rounded-xl bg-violet-500'>Add Edit</button> :
          <button onClick={handleAdd}
          className='w-28 ml-5  h-12 rounded-xl bg-green-500'>Add</button>
       
        }
        </div>

<ul className='flex flex-wrap mt-8 w-10/12 px-4 mx-auto border-gray-700 gap-4'>
{
  todos && todos.map((item,i)=>(
    <li key={i} className='w-full text-xl flex justify-between gap-4 border-2 border-gray-2 h-16'>
    <span className=' my-auto'>{item}</span>
   <div>
   <button onClick={()=>handleEdit(i)}
     className='w-20 bg-blue-500 h-12 rounded-xl'>Edit</button>
    <button onClick={()=>handledelete(i)}
     className='w-20 bg-red-400 h-12 rounded-xl'>Delete</button>
   </div>

</li>
  ))      
}

</ul>


    </div>
  )
}

export default Todo



