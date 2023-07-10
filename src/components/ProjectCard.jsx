import React from 'react'
import {Link} from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={props.src1} className="d-block w-100 images" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={props.src2} className="d-block w-100 images" alt="..." />
    </div>
    <div className="carousel-item" >
      <img src={props.src3} className="d-block w-100 images" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





<hr />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.body}</p>
      <Link to={props.btn} className='btn' target='_blank'>
        Source Code
      </Link>     
    </div>
  </div>
     
  )
}

export default ProjectCard