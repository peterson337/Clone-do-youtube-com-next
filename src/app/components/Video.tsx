'use client'
import React,{useEffect, useState} from 'react'
//import  {returnVideoCanal}  from "../../../Redux/features/canalVideo";
import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { Props } from "../types/Props";

import {  YoutubeVideoCanal} from "../../../Redux/types/canalVideoTipagem";

import { useSelector, useDispatch } from 'react-redux';
import  {canalVideo}  from "../../../Redux/features/canalVideoYoutube";
import Link from 'next/link'
import { Loading } from "../components/Loading";

export const Video = ({canal} : Props) => {

  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


      useEffect(() => {

        const getData = async () => {       
          const url = 'https://www.googleapis.com/youtube/v3/activities';
          const apiKey = process.env.YOUTUBE_API_KEY;
          const part = 'snippet,contentDetails'
          const response = await fetch(`${url}?channelId=${canal}&key=${apiKey}&part=${part}&maxResults=50	`);

          const json = await response.json();

          const jsonItems =  json.items;

          setVideo(jsonItems);

          return setIsLoading(false);
        }
        
        getData();
      }, [])
          
      
      return (
        <main

    >
      
      {  

      isLoading?

      <Loading></Loading>

      :

      <section className='m-5 md:ml-28  ml-14 flex   2x1:flex-row gap-5 flex-wrap'>

        {
        video.map((video: YoutubeVideoCanal) => {
          const videoId = video.contentDetails?.upload?.videoId;
  
        return(
        <section
      className='flex flex-col   gap-2 justify-center md:justify-start '
        key={video.snippet.channelId}
        >
          <Link
                href={ videoId?  `/${video.contentDetails.upload.videoId} ` : ``} 
  
          >
          <img src={video.snippet.thumbnails.high.url}
          className='md:w-60 lg:w-60 w-60'
          />
          
          <h2
          className='w-60'
          >{video.snippet.title}
          </h2>
          </Link>
  
          {/* <div
          className='flex flex-row'
          >
            5 mil visualizações há 4 semanas  
          </div> */}
     
  
          </section>
  
        )  
        })
        }
      </section>
      
         }
        
        {/* 
        
        */}

    </main>
  )
  
}
