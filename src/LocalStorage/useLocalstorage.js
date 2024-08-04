import React from 'react'

const useLocalstorage = (key ,value) => {
    console.log(key , value)
    localStorage.setItem(key , value)


    return value = localStorage.getItem(key)
}

export default useLocalstorage