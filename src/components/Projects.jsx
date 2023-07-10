import React,{useState, useEffect} from 'react';
import Slidein from './Slidein';
import Text, {Proj} from './Text';
import { Link } from 'react-router-dom';
import ZoomCards from './ZoomCards';



const Projects = () => {
    const[hey,setHey]=useState(false);

    
    setTimeout(()=>{setHey(true)
    },100);
    useEffect(()=>{
      <ZoomCards />
    },[]);

  return (
    <section id='Projects'>
    {hey ? <Slidein greeting={Text.projectgreeting} slideInText={Text.projectSlide} class='row skills-intro'/>:
    <div className='row skills-intro'>  </div>}
    <ZoomCards />
    </section>
  )
}

export default Projects