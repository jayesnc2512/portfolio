import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Zoom from '@mui/material/Zoom';
import {Proj} from "./Text"


const ZoomCards = () => {
    const[checked,setChecked]=useState(true)

  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '3000ms' : '0ms'}} >

    <div className='row'>
    {Proj.map((data)=>

   <ProjectCard 
      key={data.id}
      id={data.id}
      src1={data.src1} 
      src2={data.src2} 
      src3={data.src3} 
      body={data.body} 
      title={data.title}
      btn={data.btn}
    />)}
</div>
</Zoom>
  )
}

export default ZoomCards