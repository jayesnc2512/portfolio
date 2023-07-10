import React from 'react';
import Badge from './Badge';
import SideButton from './SideButton';
import Slidein from './Slidein';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
  
    <nav className='navbar' >
    <div className='badges-holder'>
    <Link to="https://github.com/jayesnc2512" target="_blank">
    <Badge 
      badge="social-badge github"
      icon="bi bi-github"
      spanClass="social-icon"
      spanText="github.com/jayeshnc2512"
    />
    </Link>
    <Link to="https://www.linkedin.com/in/jayesh-chaudhari-b1578b149/" target="_blank">
    <Badge 
      badge="social-badge linkedin"
      icon="bi bi-linkedin"
      spanClass="social-icon"
      spanText="jayesh-chaudhari-b1578b149"
    />
    </Link>
    <Link to="mailto:jayeshnc2512@gmail.com" target="_blank">
    <Badge 
      badge="social-badge mail"
      icon="bi bi-envelope"
      spanClass="social-icon"
      spanText="jayeshnc2512@gmail.com"
    />
    </Link>
    <Link to="tel:+919834624338" target="_blank">
    <Badge 
      badge="social-badge phone"
      icon="bi bi-telephone"
      spanClass="social-icon"
      spanText="+919834624338"
    />
    </Link>
    </div>
    </nav>
    <div id='mySidenav' className='sidenav'>
      <SideButton
        href="/"
        span="About Me"
        id="about"
      />
      <SideButton
        href="/skills"
        span="Skills"
        id="skills"
        />
      <SideButton
        href="/projects"
        span="My Projects"
        id="projects"
        />
      <SideButton
        href="https://drive.google.com/file/d/1z-9LPhXHnsimJcj2AI912geIVvcIF1ay/view"
        span="My Resume"
        id="resume"
        />
    </div>
    
    </section>

  )
}

export default Navbar;