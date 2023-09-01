'use client'
import React, {useState, useEffect} from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';

import { fetchYoutubeData  } from '../../../Redux/features/slice';
import { RootState } from '../../../Redux/store'; // Certifique-se de que o caminho está correto


//import Image from 'next/image'


export const Main = () => {
    



  const [youtube, setYoutube] = useState([]);

  const dispatch = useDispatch();


  
  const youtubeData = useSelector((state: RootState) => state.youtube.data);
  
  useEffect(() => {
    dispatch(fetchYoutubeData()); // Substitua pela chave correta
  }, [dispatch]);
  
  return (
    <main>
      {
        youtubeData.map((video: YoutubeVideo) => {
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
