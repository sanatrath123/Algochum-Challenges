// import React, { useState } from 'react'

// const App = () => {

// const [leftArray ,setLeftArray] = useState([
//     "FIRST" , "SECEND" , "THIRD" , "FOURTH"
// ])
// const [rightArray , setRightArray] = useState([])

// const [selected , setSelected] = useState([])
// // const [clicked , setClicked ] = useState(false)

// //handing selected array
// const handleClick =(item)=>{

// const updatedState =  selected.includes(item) ?
  
//   selected.filter((val)=>(
//     val != item
//   ))
  
//    :[...selected ,item]

//    setSelected(updatedState)
//   console.log(selected)
// }



// //shift to right
// const ShiftToRight= ()=>{
//   if(!selected) return
// if( rightArray.includes(...selected)) return

//     setRightArray([...rightArray,...selected])

//     setLeftArray(
//       leftArray.filter((item)=>(
//         !selected.includes(item) 
//       ))
//     )

//     setSelected([])
 
// }

// //shift to left again
// const ShiftToLeft = ()=>{
//   if(!selected) return
// if(leftArray.includes(...selected)) return

//   setLeftArray([...leftArray,...selected])

//   setRightArray(
//     rightArray.filter((item)=>(
//       !selected.includes(item)
//     ))
//   )

//   setSelected([])
// }


//   return (
//     <>
//     <h1 className='mt-10 text-2xl font-bold '>TRANSFER LIST</h1>
//     <div className='w-full flex justify-center align-middle h-screen '>
  

// {/* boxs */}

// <ul className='w-1/6 h-3/6 flex flex-col justify-center border-2 border-gray-700 bg-gray-200  my-auto'>


// {
//   leftArray.map((item,i)=>(
        
//           <li key={i}
//          onClick={()=>handleClick(item)}
//          className={`mx-auto w-8/12 border-2 border-gray-900 cursor-pointer ${selected.includes(item)? "bg-gray-600": "bg-gray-400"} text-gray-100 text-3xl font-bold h-12 text-center mt-3`}>{item}</li>  
//         ))

// }
// </ul>

// <div className='w-1/6 h-3/6 flex justify-between flex-col   my-auto'>
// <img src="public/left-arrow.jpg" alt="" className='h-12 w-12 mx-auto my-auto cursor-pointer'
// onClick={ShiftToLeft}
// />
// <img src="public/right-arrow.jpg" alt="" className='h-12 w-12 mx-auto my-auto cursor-pointer' 
// onClick={ShiftToRight}
// />
// </div>

// <ul className='w-1/6 h-3/6  border-2 border-gray-700 bg-gray-200  my-auto'>
// {
// rightArray.map((item,i)=>(
        
//         <li key={i}
//        onClick={()=>handleClick(item)}
//        className={`mx-auto w-8/12 border-2 border-gray-900 cursor-pointer ${selected.includes(item)? "bg-gray-600": "bg-gray-400"} text-gray-100 text-3xl font-bold h-12 text-center mt-3`}>{item}</li>  
//       ))
//       }
// </ul>

//     </div>
//     </>
//   )
// }

// export default App




// import Landingpage from './Command Palette/Landingpage'
// import TypeEffect from './TypeEffect/TypeEffect.jsx'

// import Multiplefilter from './MultipleFilter/Multiplefilter.jsx'

// import Lightbox from './Light-box-challenge/Lightbox.jsx'
// import  ModelPage from './Model-Challenge-14/ModelPage.jsx'

//import Formpage from './Form-Validator/Formpage.jsx'

// import MainPage from "./Keypress-Handle/MainPage"

 //import MainCounter from "./Counter-React-Challenge/MainCounter"
// import MainPage from './Demo-Acordian/MainPageAcc.jsx'
// import Page from './Toast-Notification/Page.jsx'
//import Main from "./LocalStorage/Main"
// import Otp from "./Otp-Input/Otp"
//import Circle from "./CircleMove/Circle"
//import Banner from "./InfinityBanner/Banner"
import FeedbackStar from "./FeedbackStar/FeedbackStar"
//import File from "./FolderStructre/File"

const App = () => {
  
  return (
    <div className='w-full h-screen
     flex justify-center items-center'>
      <FeedbackStar/>
    </div>
  )
}




//it is only for infinity scrool
// import InfinityScroll from './Infinity-Scroll/InfinityScroll.jsx'
// const App = () => {
  
//   return (
//     <div className=' overflow-hidden
//      overflow-x-scroll'>
//       < InfinityScroll/>
//     </div>
//   )
// }


export default App

