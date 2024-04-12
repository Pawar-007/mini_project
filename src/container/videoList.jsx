import React from 'react'
//import './videoList.css';
import Yplaylist from './fetches/yplaylist'
import { Link, NavLink } from 'react-router-dom'
export default function VideoList(props) {
  return (
    <>
     <div className="card" style={{width: 18+"rem",height: 25+"rem"}}>
  <img src={props.img} className="card-img-top" style={{width:100+"%",height:40+"%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.discription}</p>
  <Link to={`${props.to}`} className="btn btn-primary" style={{ position: "absolute", bottom: "10px" }}>start</Link>
    
  </div>
</div>

    </>
  )
}
