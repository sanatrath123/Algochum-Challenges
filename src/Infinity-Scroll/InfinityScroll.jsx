import React, { useEffect, useRef ,useState } from 'react';
import { cardDetails } from './CardInfo';

const InfinityScroll = () => {
    
const scrollref = useRef()
const [isScroling , setScroling ] = useState(false)
const animationFrameId = useRef(null);

useEffect(()=>{

  const scrollDiv = scrollref.current

  const scroll = ()=>{

    if(isScroling && scrollDiv){
      scrollref.current.scrollLeft +=4

    
      if(scrollDiv.scrollLeft >= scrollDiv.scrollWidth/2){
        scrollDiv.scrollLeft = 0
      }
    }
      animationFrameId.current = requestAnimationFrame(scroll);
    }
     if (isScroling) {
            animationFrameId.current = requestAnimationFrame(scroll);
        }

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }

          }

  
},[isScroling])


const handleEnter=()=>{
  setScroling(false)
}

const handleLeave= ()=>{
  setScroling(true)
}

    return (
        <div className='scroll-container'
        ref={scrollref}
        >
            <div className='flex flex-nowrap gap-5'
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            >
                {cardDetails.concat(cardDetails).map((item,i) => (
                    <div key={i}
                        className='w-[26rem] my-auto h-60 py-6 px-5 bg-gray-100 rounded-xl cursor-pointer'>
                        <img className='h-12 mb-4 rotate-180 opacity-25'
                            src="src/Infinity-Scroll/logos/double-quotes-svgrepo-com.svg" alt="logo" />

                        <h1 className='font-bold text-xl'>{item.content}</h1>

                        <div className='flex justify-between w-full mt-6'>
                            <img className='h-8 rounded-full '
                                src={item.avatar} alt="logo" />

                            <span className='text-lg'>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfinityScroll;

