import React, { useState } from 'react'
import Slidein from './Slidein';
import Text from './Text';
import AboutContent from './AboutContent';
import CoCurricular from './CoCurricular';


const About = () => {
  const[hey,setHey]=useState(false);
  setTimeout(()=>setHey(true),1000)


  return (
    <section id='About'>
    <div id="row" className="row">
    {hey ? <Slidein greeting={Text.hey} slideInText={Text.aboutMe} class='row col-12 col-md-6'/>:<div className='row col-12 col-md-6'></div>}
    <AboutContent />
    </div>
    <div className='row '>
    <CoCurricular />
    </div>
    </section>
  )
}

export default About