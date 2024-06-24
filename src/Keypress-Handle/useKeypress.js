import React, { useEffect, useState } from 'react'

const useKeypress = (targetKey) => {

const [ keypressed , setKeypressed] = useState(false)

const handledown = ({key})=>{
    if(targetKey === key ){
        setKeypressed(!keypressed)
    }
}

const handleup =({key})=>{
    if(targetKey === key){
        setKeypressed(false)
       
    }
}


useEffect(()=>{

    window.addEventListener('keyup', handleup)
    window.addEventListener('keydown', handledown)

    return ()=>{
        window.removeEventListener('keyup' , handleup)
        window.removeEventListener('keydown',handledown)
    }
})

return keypressed

}

export default useKeypress
