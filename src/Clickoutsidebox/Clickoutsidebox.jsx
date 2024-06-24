// import React, { useRef } from 'react'
// import Toast from './Toast'
// import { useState } from 'react'


// const Clickoutsidebox = () => {
//     const [toasts, setToasts] = useState([]);
// const divref = useRef()
// const handleClick= (e) =>{
// //console.log(divref ,e.target)
// if(divref.current == e.target) return
// setToasts([...toasts, {}])
// console.log(toasts)
// }

//   return (
//     <div
//     className='w-full h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-800 flex flex-col justify-center align-middle relative'
//     onClick={handleClick}
//     >
//         <ul className='flex flex-col w-60 mt-6 absolute top-3 left-[45rem] mx-auto justify-center'>
//             {
//                 toasts.map((item,i)=>(
//                     <li key={i}><Toast/></li>
//                 ))
//             } 
//         </ul>
//       <div className='my-auto w-60 h-32 bg-gradient-to-r from-green-400 to-blue-500 items-center justify-center text-3xl font-bold flex hover:from-pink-500 hover:to-yellow-500 mx-auto'
//        ref={divref}

//       >CLICK ME </div>
//     </div>
//   )
// }

// export default Clickoutsidebox

import React, { useRef, useState } from 'react';
import useOutsideClick from './useOutsideClick'
import Toast from './Toast';


const ClickOutsideBox = () => {
  const [toasts, setToasts] = useState([]);
  const divRef = useRef();

  const handleOutsideClick = () => {
    setToasts((prevToasts) => [...prevToasts, {}]);
  };

  useOutsideClick(divRef, handleOutsideClick);

  return (
    <div className='w-full h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-800 flex flex-col justify-center items-center relative'>
      <ul className='flex flex-col w-60 mt-6 absolute top-3 left-1/2 transform -translate-x-1/2'>
        {toasts.map((_, i) => (
          <li key={i}>
            <Toast />
          </li>
        ))}
      </ul>
      <div
        className='my-auto w-60 h-32 bg-gradient-to-r from-green-400 to-blue-500 items-center justify-center text-3xl font-bold flex hover:from-pink-500 hover:to-yellow-500'
        ref={divRef}
      >
        CLICK ME
      </div>
    </div>
  );
};

export default ClickOutsideBox;
