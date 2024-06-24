import React, { useState , useRef} from 'react'

const ModelPage = () => {

    const [showModel , setShowModel] = useState(false)

    const divref = useRef(null)


    const handleClick = (e)=>{
 
        if(divref.current && divref.current ===e.target ){
       setShowModel(false)
               }
           }

  return (
    <>

    <div className='m-auto'>
        <button className='w-32 h-12 rounded-2xl border-2 border-gray-700  bg-indigo-100 shadow-lg shadow-indigo-500/50'
        onClick={()=>setShowModel(true)}
        >ShowModel</button>
    </div>
{
    showModel &&   <div className='w-full backdrop-blur-sm bg-white/10 fixed flex h-screen'
    ref={divref}
onClick={handleClick}
    >
        <div className='w-[30rem] h-80 rounded-2xl bg-gray-100 shadow-2xl  flex m-auto flex-col'>
    <h1 className=' text-3xl m-auto '>Create This Model By Fun</h1>
    <button className='w-28 h-10 px-2 shadow-blue-700/70 shadow-2xl rounded-xl border-2 border-gray-800 text-2xl mt-[-3rem] m-auto flex justify-center'
    onClick={()=>{setShowModel(false)}}
    >close</button>
    
        </div>
    </div>
}
</>
  )
}

export default ModelPage