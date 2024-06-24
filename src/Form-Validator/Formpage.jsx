import { retry } from '@reduxjs/toolkit/query'
import React from 'react'
import { useState } from 'react'

const Frompage = () => {

const defaultState  = {
  firstname:{value:"" , error:null},
  lastname: {value:"", error:""},
  email: {value:"", error:""},
  password: {value:"", error:""},
  cheeckpassword: {value:"", error:""}
}

const [ type , setType] = useState("password")

const [formState , setFormState]= useState(defaultState)

const [success , setSuccess] = useState(false)

const handleChange = (field , value)=>{
setFormState({
  ...formState,
  [field]:{value: value , error: null}
})
}


  const handleSubmit = (e)=>{
e.preventDefault()
const haserror = Validation()

if(haserror){
setSuccess(false)
return
}

setSuccess(true)
    
  }

  const Validation = ()=>{

  const updatedState = {...formState}
  let error = false
   debugger
    const {firstname , lastname , email , password , cheeckpassword } = updatedState

    if(firstname.value.length < 3) {
     
      updatedState.firstname.error = "Firstname should be atleast 3 char"
      error = true
    }

    if(lastname.value.length < 3){
      
      updatedState.lastname.error = "Lastname should be atleast 3 char"
      error = true
    }

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!email.value.toLowerCase().match(re)){
updatedState.email.error = "Enter a Valid Email"
error = true 
    }

    if(password?.value.length == 0){
     updatedState.password.error = "Password can not be empty"
     error = true 
    }

    if(!cheeckpassword?.value || password.value !== cheeckpassword.value ){
     updatedState.cheeckpassword.error = "Password Dont match"
     error = true 
    }

setFormState({
  ...formState , 
  ...updatedState
})

return error

  }




  return (
    <form className='flex flex-col bg-gray-100 w-full md:w-9/12  lg:w-3/12 my-auto shadow-2xl'
    onSubmit={handleSubmit} 
    >
  <div className=' mt-5 flex flex-col mx-3 mb-3 relative'>
   <label htmlFor="" className='text-lg font-semibold'>First name</label>  
   <input type="text" placeholder='Enter Last-Name' className='w-11/12 py-2 px-2  my-2 rounded-xl' 
    onChange={(e)=>handleChange('firstname' , e.target.value)}
   />

{  formState?.firstname?.error &&
   <span className='text-red-700'>{formState.firstname.error}</span>
  }
   </div>


   <div className=' my-3 flex flex-col mx-3 relative'>
   <label htmlFor="" className='text-lg font-semibold'>Last name</label>  
   <input type="text" placeholder='Enter Last-Name' className='w-11/12 py-2 px-2  my-2 rounded-xl' 
    onChange={(e)=>handleChange('lastname' , e.target.value)}
   />
   {  formState?.lastname?.error &&
   <span className='text-red-700'>{formState.lastname.error}</span>
  }
   </div>


   <div className='my-3 flex flex-col mx-3 relative'>
   <span className='text-lg font-semibold'>Email</span>  
   <input type="text" placeholder='Enter Email' className='w-11/12 py-2 px-2  my-2 rounded-xl' 
  onChange={(e)=>handleChange('email' , e.target.value)}
   />
{  
  formState?.email?.error &&
  <span className='text-red-700'>{formState.email.error}</span>
 }

   </div>


   <div className=' my-3 flex flex-col mx-3 relative'>
   <label htmlFor="" className='text-lg font-semibold'>Password</label>  
   <input type={type} placeholder='Enter Password' className='w-11/12 py-2 px-2  my-2 rounded-xl' 
  onChange={(e)=>handleChange('password' , e.target.value)}
   />
    <span className='absolute right-12 bg-black text-gray-100 p-[2px] rounded-lg cursor-pointer top-10'
   onClick={()=>{
    if(type == "password"){
      setType("text") 
      return
    }
    setType("password")
    
   }}
   >SHOW</span>
  {  
  formState?.password?.error &&
  <span className='text-red-700'>{formState.password.error}</span>
 }
</div>

<div className=' mt-3 mb-5 flex flex-col mx-3 relative'>
   <label htmlFor="" className='text-lg font-semibold'>Conform Password</label>  
   <input type={type} placeholder='Enter Password' className='w-11/12 py-2 px-2  my-2 rounded-xl' 
  onChange={(e)=>handleChange('cheeckpassword' , e.target.value)}
   />
   
   {  
  formState?.cheeckpassword?.error &&
  <span className='text-red-700'>{formState.cheeckpassword.error}</span>
 }
</div>

<button className='h-12 w-28 bg-gray-700 text-gray-100 rounded-xl text-xl font-semibold mx-auto mb-6'
type='submit'>REGISTER</button>

{ success &&
  <span className='text-green-700 text-lg mx-auto '> Submitted Successfully</span>
}
    </form>


  )
}

export default Frompage
