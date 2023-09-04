'use client'
import React, {useState, useEffect} from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchYoutubeData  } from '../../../Redux/features/slice';
import Link from 'next/link'

import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto

//import Image from 'next/image'


export const Main = () => {
    
  const [youtube, setYoutube] = useState([]);

  const dispatch = useDispatch<AppDispatch>();
  
  const youtubeData = useSelector((state: RootState) => state.youtube.data);
  
  useEffect(() => {
    dispatch(fetchYoutubeData()); // Substitua pela chave correta
  }, [dispatch]);
      //channelTitle
  return (
    <main

    
    >
      <section
      className='flex flex-row  	'   
      
      >

      {
        youtubeData.map((video: YoutubeVideo) => {
          return(
            <section
            key={video.snippet.title}
              className='flex flex-wrap flex-col justify-center text-center items-center mt-3 
                         md:m-4 gap-3 md:mt-3 '  
            >
              
              
              <img src={video.snippet.thumbnails.high.url} 
              alt="japonesa"
              className='w-72 md:w-96  rounded-3xl'
              
               />

            <Link href={`/${video.id}`} className='w-96'>{video.snippet.title}</Link>

            
              <p>{video.snippet.channelTitle}</p>

              <p>visualização: {video.statistics.viewCount}</p>
              {/* <img src={video.snippet.thumbnails.high.url} 
              alt="japonesa"
              className='w-72'
               />
              <h1
              className=''
              >{video.snippet.title}</h1> */}

            

            


            </section>
          )
        })
      }
      </section>
  </main>
  )
}
