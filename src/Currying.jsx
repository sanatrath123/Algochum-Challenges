import React from 'react'

const Currying = () => {

  const Mutiply = (x)=>{
    return function (y){
     if(y) return Mutiply(x * y)
return x
     
    }
  }
  return (
    <h1>Currying</h1>
  )
}

export default Currying