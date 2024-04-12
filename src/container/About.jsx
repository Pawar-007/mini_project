import React from 'react'
import './about.css'
import image from './image.png'
import './login'
import './about.css'
import { Link } from 'react-router-dom'
export default function About() {
    return (
     <>
     <div id="body" className="body_contaon" /*style={body}*/>
        <div id="discription" /*style={Aboutbody}*/>
            <h1>Find the best online course and Learn</h1>
            <h4>Explore more for  learning</h4>
            <Link to="/explore"><button className="but1">Explore course</button></Link>
            <button className="but1">watch video</button>
        </div>
     <img  src={image} alt="image" id="img1" /*style={img} *//>
     <div id="video_summary"></div>
    </div>
     </>
  );
}
