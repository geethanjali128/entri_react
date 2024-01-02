import React from 'react'
import NewComponent from './components/NewComponent'


const about = (props) => {
    let rollno=30
  return (
    <div>
      <h3>geethanjali</h3>
      <h3>{props.age}</h3>
      <h3>{props.data}</h3>
      <h3>{rollno}</h3>
      <NewComponent fname="anjali" age={20} data="this is anjali"/>
    </div>
    
  )
}

export default about
