

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landingpage = () => {


  const divref = useRef()
  const navigate = useNavigate()
 const [showCommand , setShowCommand]= useState(false)
const listitems =[ {
  title:"HOME",
 img:"public/home.png",
 navigate: "/home"
} ,
{
  title:"ABOUT",
 img:"public/about.png",
 navigate: "/about"
} ,
{
  title:"CONTACT-US",
 img:"public/contactus.jpg",
 navigate: "/contact"
} 

]

const [ searchlist, setSearchlist ] = useState(listitems)

//  const callback = (e)=>{
// if(e.ctrlKey && e.code === "KeyF"){
//   setShowCommand((prevstatus)=>!prevstatus)
// }
//  }
//   document.addEventListener("keydown" , callback)

// return(()=>{
//   document.removeEventListener('keydown', callback)
// })


  
 useEffect(()=>{
 const callback = (e)=>{
  if(e.ctrlKey && e.code === "KeyV"){
    setShowCommand((prevstatus)=>!prevstatus)
  }
   }
  
    document.addEventListener("keydown" , callback)
  
    return(()=>{
      document.removeEventListener('keydown', callback)
    })
 },[])

 const handleChange = (e)=>{

 const newlist =  listitems.filter((item)=>(
    item.title.toUpperCase().includes(e.target.value.toUpperCase())
  ))

  setSearchlist(newlist)
 }

 //handle close window 
 const handleClick = (e)=>{
  console.log(e.target , divref.current)
//   debugger
// if(divref.current === e.target) return
//  handleCommand()
 }

 //handel show command 

const handleCommand = ()=>{
  setShowCommand((prevcomand)=>!prevcomand)
}

 

  return (
   
    <div className="my-auto text-gray-100 text-center"
    
    >
      {
        showCommand ?
        <div className=' w-full  bg-gradient-to-b from-purple-600 to-blue-600 fixed inset-1 flex align-middle justify-center' 
        onClick={handleClick}
        >
<div
ref={divref}
className='bg-slate-600 w-[30rem] h-96 my-auto px-6'
// onClick={(event) => event.stopPropagation()}
>
<input type="text"
className='w-11/12 bg-slate-700 rounded-xl py-3 px-2 mt-4 text-xl text-gray-200' 
placeholder="🔍 SEARCH FOR PAGES "
onChange={handleChange}
/>

<ul className='flex flex-wrap text-2xl font-medium justify-center mt-4 '>
{
  searchlist.map((item)=>(
    <li key={item.title}
    onClick={()=>{
      navigate(`${item.navigate}`)
    }}
     className='w-10/12 border-2 border-gray-200 rounded-xl px-3 py-2 my-3 flex cursor-pointer'>
    <img src={item.img} alt="" 
    className='h-10 w-10 mr-20'/>
    {item.title}</li>
  ))
}
    

  
</ul>

</div>
        </div>

        :
      <> <h1 className="font-bold text-4xl mb-3">Command Palette</h1>
        <p className="text-xl my-4">Read the description to start solving the problem. 💯</p>
        <p className="text-xl">
          <span className="bg-gray-800 p-1 rounded-lg"
          onClick={handleCommand}
          >
            CMD + K
          </span> should open a Search Modal to navigate through website pages.
        </p> </> 
      }
    </div>
   
  );
};

export default Landingpage;
