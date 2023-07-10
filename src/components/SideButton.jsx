import React from 'react';
import { Link } from 'react-router-dom';

const SideButton = (props) => {
  return (
    <div>
    <Link to={props.href} aria-current="page">
    <span id={props.id}>{props.span}</span>
    </Link>
    </div>
  )
}

export default SideButton;