import React from 'react';
import hey from "../img/hey.png"
import Collapse from '@mui/material/Collapse';
import Zoom from '@mui/material/Zoom';



const Slidein = (props) => {
  const [checked, setChecked] = React.useState(false);


  setTimeout(() => {
    setChecked(true)
  }, 500);

 

  return (
    <div className={props.class}>
    <div className='slideIn col-4'>
    <Collapse orientation="horizontal" in={checked} collapsedSize={0}>
    <img  className='hey' src={hey} alt='Tour Guide'/>
    </Collapse>
    </div>
    <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms'}} >
    <div className='col-8 slide-text'>
      <p>
      {props.greeting},<br/>
        {props.slideInText}
        </p>
    </div>
    </Zoom>
    </div>
  )
}

export default Slidein