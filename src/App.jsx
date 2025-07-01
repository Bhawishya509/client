import React from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = React.useState("")
  const clicked= async()=>
  {
   const response=prompt("Enter your name");
 

  


  let res=await axios.get(`https://server-wvx7.onrender.com/${response}`)
  setData(res.data)
  console.log(res.data)
  }
  return (
   <>
    <div style={{height:"100vh",width:"100vw",backgroundColor:data}}>
      hh
    </div>

    <button onClick={clicked}>click</button>
   </>
  )
}

export default App
