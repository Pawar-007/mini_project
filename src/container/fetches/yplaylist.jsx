import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './yplaylist.css'

export default function Yplaylist(props) {
    const [fetData,setfetData]= useState([]);
    
    useEffect(()=>{
       
       axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL3ToCVMGlINq5-zkqsj5FRk-LGaGnvHZg&key=AIzaSyAb_GVSDv6CNFDGXXvRWK7iwF7qqxhfQp0")
      .then(res=>{
        setfetData(res.data.items)
      })
      .catch(error=>{
         console.log(error)
      })
    },[])
    
    const [no,upno]=useState(0)
    
  return (
    <div className='full_play'>
      <div>
      <iframe width="900" height="500" 
    src={`https://www.youtube.com/embed/${fetData[no]?.contentDetails?.videoId}`} 
    ></iframe>
    <div className='discriptions'>
      <h2>{fetData[no]?.snippet?.title}</h2>
    </div> 
      </div>
       
  <ol id='listvideo' >
       <h2 id="title">DSA in hindi</h2>
          {fetData.length>0 && fetData.map((item, index)=> (
            <li key={item.id} >
              <button id="buttons" onClick={()=>{
                upno(index);
              }}>
              <div className="card mb-3" Style="width:400px;height:100px">
    <div className="row g-0">
      <div className="col-md-4">
      {item.snippet.thumbnails?.default?.url && (
                  <img src={item.snippet.thumbnails.default.url} className="img-fluid rounded-start" id="images" alt="..."/>
                )}
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text">{item.snippet.description} </p>
        
        </div>
      </div>
    </div>
  </div>
              </button>
            </li>
          ))}
      </ol>  

    </div>

  )
}
