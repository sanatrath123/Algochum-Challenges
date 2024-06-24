// import React from 'react'
// import { useState } from 'react'
// const Toast = () => {
//   const [visible , setVisible] = useState(true)

// setTimeout(()=>{
//   setVisible(false)
// },3000)

//   return (
//     <div className={`bg-pink-300 text-xl font-semibold h-10 w-60 mt-4 rounded-2xl text-center border-2 border-gray-500 ${!visible && "hidden" } `}>CLCIKED OUTSIDE</div>
//   )
// }

// export default Toast

import React, { useEffect, useState } from 'react';

const Toast = () => {
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`bg-pink-300 text-xl font-semibold h-10 w-60 mt-4 rounded-2xl text-center border-2 border-gray-500 ${!visible && 'hidden'}`}>
      CLICKED OUTSIDE
    </div>
  );
};

export default Toast;
