import React, { useState } from 'react'

function Comp3() {
    const[data,setData]=useState({
        name:"",
        age:"",
        password:""
    })

    const changeData=(event)=>{
        event.preventDefault()
        setData({...data,[event.target.name]:event.target.value})
        console.log(event.target.value)

    }
    

  return (
    <div>
      <div>
        <label>name</label><br/>
        <input
        type='text'
        name='name'
        value={data.name}
        onChange={changeData}/><br/>
         <label>age</label><br/>
        <input
        type='number'
        name='age'
        value={data.age}
        onChange={changeData}/><br/>
         <label>password</label><br/>
        <input
        type='password'
        name='password'
        value={data.password}
        onChange={changeData}/>
        <button  type='submit'  onClick={changeData}>submit</button>
      </div>
    </div>
  )
}

export default Comp3
