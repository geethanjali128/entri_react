import React from 'react'
import './Component.css'

function comp1(props) {
  const langs=["telugu","english","hindi"]
  return (
    <div className='para'>
      {/* <p>{props.name} {props.age} {props.message}</p> */}
      <ul>{langs.map((lang)=>(
        <li>{lang}</li>
      ))}</ul>
    </div>
  )
}

export default comp1
