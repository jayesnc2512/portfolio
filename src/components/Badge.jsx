import React from 'react'

const Badge = (props) => {
  return (
    <div className={props.badge}>
        <i className={props.icon}></i>
        <span className={props.spanClass}>{props.spanText}</span>
    </div>
  )
}

export default Badge