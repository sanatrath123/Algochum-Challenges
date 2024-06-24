import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from 'react'
import useKeypress from './useKeypress'

    const MainPage = () => {

const notify = ()=> toast.success('you open the box');

      const EnterKey = useKeypress('Enter')
      const ShiftKey = useKeypress('Shift')


useEffect(()=>{

  if(EnterKey && ShiftKey){
    toast.success('you open the box');

  }
},[ShiftKey , EnterKey])


      return (
       
<div className='w-full'>

<div className='w-5/12 h-96 flex justify-center align-middle bg-sky-400 m-auto'
  >
            <button className='w-32 h-12 bg-violet-600 rounded-2xl my-auto' onClick={notify}>Make me a toast</button>
            <Toaster />
          </div>

</div>
      
      );
    };



export default MainPage









