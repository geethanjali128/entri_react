import React from 'react'

const NewComponent = (props) => {
  return (
    <div>
      <h3>{props.fname}</h3>
      <h3>{props.age}</h3>
      <h3>{props.data}</h3>
    </div>
  )
}

export default NewComponent
