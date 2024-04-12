import React from 'react'
import Navbar from '../Navbar'
import VideoList from '../videoList'
import "./Excource.css"
import java from './Java.png'
import dsa from './dsa.png'
import pyimg from './pyimg.jpg'
function Excource() {
  return (
    <>
    <Navbar/>
    <div className="playlists">
     
    <VideoList title="DSA Tutroial-20days" type="free cource" discription="Data Structures and Algorithms (DSA) form the 
      backbone of efficient software development." img={dsa} to="/videoApp/dsa" /> 
    <VideoList title="OOPS IN JAVA" type="free cource" discription="Java is a widely-used programming language for coding web applications."
       img={java}  to="/videoApp/java" /> 
    <VideoList title="Python for beginners" type="free cource" discription="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
       img={pyimg}  to="/videoApp/Python" /> 
      
    </div>
   </>
  )
}

export default Excource
