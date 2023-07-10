import React,{useState} from 'react'
import SideButton from './SideButton';
import profilePic from "../img/profilePic.jpg"
import VerticalRule from './VerticalRule';
import Text from './Text';
import Zoom from '@mui/material/Zoom';


const AboutContent = () => {
  const [checked, setChecked] = React.useState(true);


  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '3000ms' : '0ms'}} >
    <div className='col-12 col-md-6 about-row'>
    <div className='about-content'>
    
    <VerticalRule />
    <SideButton
        span="About Me"
        id="about"
      />

    {/* ABOUT TEXT */}
    <img src={profilePic} className='profile-pic' alt='profile'></img>
    <div className='details'>
    <h4 className='name'>{Text.name}</h4>
    <p>
        --{Text.domain}
    </p>
    <p>--{Text.address}</p><br />
    <h4 className='education-header'>EDUCATION</h4>
    
    <p>
       --B.E. CSE 5<sup>th</sup> sem, Mumbai University, Year of Graduation-2025
    </p>
    <p>
        --CGPI: <b>9.2/10</b>
    </p>
    <p>
        --12<sup>th</sup> Grade: <b>87.8</b>%  Board:CBSE
    </p>
    
    </div>
    </div>
    </div>
    </Zoom>
  )
}

export default AboutContent