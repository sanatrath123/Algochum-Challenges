import React from 'react'
import useLocalstorage from './useLocalstorage'
const Main = () => {


const [storedValue, setStoredValue] = useLocalstorage('value' , 'Dark')
console.log(storedValue)
  return (
    <div className='flex w-8/12 h-96 bg-violet-500'>
        <select name="" className='m-auto w-6/12 h-12' id="">
        <option className='flex h-[10%]' value="light">Light</option>
        <option value="dark">Dark</option>
        </select>

        <h1>This is the value set inside localStorage {storedValue}</h1>
    </div>
  )
}

export default Main