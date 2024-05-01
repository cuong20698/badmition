import React from 'react'
import '../../styles/title.css'
const Title = ({name}) => {
  return (
    <div className='title-container'>
        <p>{name}</p>
        <hr/>
    </div>
  )
}

export default Title