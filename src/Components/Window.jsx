import React from 'react'
import "./Window.css"

const Window = (props) => {
  return (
    <div className='window'>
        <span className='close' onClick={props.toggle}>&times;</span>
      <div className="window-content">
      <img src={props.imageURL} alt="" className='window-image'/>
      <p className='caption'>{props.caption}</p>
      </div>
    </div>
  )
}

export default Window