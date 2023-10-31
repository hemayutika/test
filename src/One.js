import React,{useState} from 'react'
function One() {
  const[counts1,setcounts1]=useState(0);
  function myfunc()
  {
    setcounts1(counts1+1)
  }
  function fun()
  {
    setcounts1(counts1-1)
  }
  return (
    <par>
    <button onClick={myfunc}>Increase</button>
    <span>{counts1}</span>
    <button onClick={fun}>Decrease</button>
    </par>
    
  )
}
export default One()
