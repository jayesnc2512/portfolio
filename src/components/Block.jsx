import React ,{useState} from 'react';
import Logo  from './Logo';
import ReactLogo from '../img/react.png';
import NodeLogo from "../img/node.png";
import MongoDb from "../img/mongodb.png";
import C from "../img/c.png";
import Css from "../img/css-3.png";
import HTML from "../img/html.png";
import JS from "../img/js.png";
import Mysql from "../img/mysql.png";
import Python from "../img/python.png";
import Rest from "../img/restapi.png";
import MsSql from "../img/sql-server.png";
import Bootstrap from "../img/bootstrap.png";
import { Zoom } from '@mui/material';




const Block = () => {
    const[checked,setChecked]=useState(true)
    

  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '3000ms' : '0ms'}} >
    <div className='row logo'>
    
    <Logo 
        src={ReactLogo}
        alt="react"
        text="REACTJS"
    />
    <Logo 
        src={NodeLogo}
        alt="NodeJs"
        text="NODEJS"
    />
    <Logo 
        src={MongoDb}
        alt="MONGODB"
        text="MongoDb"
    />
    <Logo 
        src={JS}
        alt="Javascript"
        text="VanillaJS"
    />
    <Logo 
        src={HTML}
        alt="HTML"
        text="HTML"
    />
    <Logo 
        src={Css}
        alt="CSS"
        text="CSS"
    />
    <Logo 
        src={Mysql}
        alt="MySQL"
        text="MySql"
    />
    <Logo 
        src={Rest}
        alt="REST API"
        text="RESTAPI"
    />
    <Logo 
        src={MsSql}
        alt="MsSQL"
        text="sql-server"
    />
    <Logo 
        src={Python}
        alt="Python"
        text="Python"
    />
    <Logo 
        src={C}
        alt="C"
        text="C"
    />
    <Logo 
        src={Bootstrap}
        alt="Bootstrap"
        text="Bootstrap"
    />
    
    </div>
    </Zoom>
    
  )
}

export default Block