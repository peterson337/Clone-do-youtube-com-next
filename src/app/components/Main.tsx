'use client'
import React, {useState, useEffect} from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 


//import Image from 'next/image'


export const Main = () => {
    
  const url = 'https://www.googleapis.com/youtube/v3/videos'
  const varName = 'YOUTUBE_API_KEY'
  const apiKey = process.env.YOUTUBE_API_KEY;
  
  const [youtube, setYoutube] = useState([]);
  
  useEffect(() => {
    const youtubeApi = async () => {
      const response = await fetch(`${url}?id=TJetxzGpbfA&key=${apiKey}&part=snippet,contentDetails,statistics,status`);
      
          //
          if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)             
          }
          
          const data = await response.json()
          
          setYoutube(
           
              data.items,
            
            );
            
          }
          
          youtubeApi();

  }, [])
  
  return (
    <main>
      {
        youtube.map((video: YoutubeVideo) => {
          return(
            <div
            key={video.snippet.title}
            >
              <h1>{video.snippet.title}</h1>

              <img src={video.snippet.thumbnails.high.url} alt="japonesa" />

              <p>{video.snippet.description}</p>

            </div>
          )
        })
      }
  </main>
  )
}
