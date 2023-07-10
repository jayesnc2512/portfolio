import React, {useState} from 'react';
import Slidein from './Slidein';
import Text from './Text';
import Block from "./Block";


const Skills = () => {
  const[hey,setHey]=useState(false);
  setTimeout(()=>setHey(true),1000);
  return (
    <section id='Skills'>
    {hey ? <Slidein greeting={Text.skillsgreeting} slideInText={Text.skillsSlide} class='row skills-intro'/>:<div className='row'> </div>}
    <Block />
    </section>
  )
}

export default Skills