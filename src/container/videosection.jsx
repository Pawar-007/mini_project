import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Videosection() {
      const [fetData,setfetData]= useState([]);
    useEffect(()=>{
      axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=300&playlistId=UUldyi11QYNXYXiLjVbyw5dA&key=AIzaSyAb_GVSDv6CNFDGXXvRWK7iwF7qqxhfQp0")
      .then(res=>{
        console.log(res.data.items);
        setfetData(res.data.items)
      })
      .catch(error=>{
         console.log(error)
      })
    },[])
    useEffect(() => {
      fetData.forEach(item => {
        console.log(item);
      });
    }, []);
  return (
    <div>
      
 {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/BPftiMM8mgI`}
  title="YouTube video player" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowFullScreen></iframe> */}
<ul>
        {fetData.map(item => (
          <li key={item.id}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
  title="YouTube video player" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowFullScreen></iframe>
            {/* Add any other desired information */}
          </li>
        ))}
      </ul>

    </div>
  )
}

/*fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=300&playlistId=UUldyi11QYNXYXiLjVbyw5dA&key=AIzaSyAb_GVSDv6CNFDGXXvRWK7iwF7qqxhfQp0")
.then(response => response.json())
.then(data=>{
 data.items.forEach(el=>{
   setfetData(el.items)
 });
})*/