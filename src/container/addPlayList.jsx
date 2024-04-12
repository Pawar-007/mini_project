import React from 'react'
import VideoList from './videoList.jsx'
import dsa from "./dsa.png"
import java from './Java.png'
import './addPlayList.css'
import Yplaylist from './fetches/yplaylist.jsx'

export default function AddPlayList() {
  return (
    <>
   <div className="videoselect">
    <h1>video section</h1>
    <div className="actvideo">
      <VideoList title="DSA Tutroial-20days" type="free cource" discription="Data Structures and Algorithms (DSA) form the 
      backbone of efficient software development." img={dsa} to="/videoApp/dsa" /> 
      <VideoList title="OOPS IN JAVA" type="free cource" discription="Java is a widely-used programming language for coding web applications."
       img={java} to="/videoApp/java" /> 
      
      </div>
   </div>
   </>
  )
}
