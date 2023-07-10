import React from 'react'

const Logo = (props) => {
  return (
<div className='logo-1  col-3'>
        <img src={props.src} alt={props.alt}></img>
        <h4>{props.text}</h4>
</div>  )
}

export default Logo