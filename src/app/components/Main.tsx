'use client'
import React, {useState, useEffect} from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchYoutubeData  } from '../../../Redux/features/slice';
import Link from 'next/link'

import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { useRouter } from 'next/navigation'
import { customHook } from '../Search/[id]/hook/customHook';


//import Image from 'next/image'


export const Main = () => {
    
  const [youtube, setYoutube] = useState([]);

  const dispatch = useDispatch<AppDispatch>();
  
  const youtubeData = useSelector((state: RootState) => state.youtube.data);

  const id = 'TJetxzGpbfA,NOVKFU7EhEo,xmxEuQXTHUU,fsJ7YYqr8YU,8NcIOBreZpc,ZFlUFbA2LGc,xh9lAwNr5M8,Uds7g3M-4lQ,4qkLz0N_L6c,-qQnKILR5u0,pC2pRDL-WoY,CDPsde__6fY,XwRrpaSbaGk,E8c6KnhdCWA,5CUCZKrP3jY';

  const {formatViews, formatDateTime} = customHook();
  
  useEffect(() => {
    dispatch(fetchYoutubeData(id)); // Substitua pela chave correta
  }, [dispatch]);
      //channelTitle
  return (
    <main
      className=''
    
    >
      <section
      className='flex md:flex-row  flex-col	flex-wrap justify-center md:justify-start'   
      
      >

        

      {
        youtubeData.map((video: YoutubeVideo) => {
          return(
            <section
            key={video.id}
              className='flex flex-wrap flex-col justify-center text-center items-center mt-3 
                         md:m-4 gap-3 md:mt-3 '  
            >
              
              <Link
              href={`/${video.id}`}
              >

              <img src={video.snippet.thumbnails.high.url} 
              alt={video.snippet.title}
              className='w-72 md:w-96  rounded-3xl'
              
               />
              </Link>

            
            <p
            className='md:w-96  mx-12 md:mx-0'
            >

            <Link href={`/${video.id}`}>{video.snippet.title}
            </Link>
            </p>

            
              <p
              className='text-[#aaa] mx-12 md:mx-0'
              >
                {video.snippet.channelTitle}
              </p>

              <p
              className='text-[#aaa] mx-12 md:mx-0'
              >
                Visualizações:  {formatViews(video.statistics.viewCount)}
               </p>

               <p
              className='text-[#aaa] mx-12 md:mx-0'

               >
                {formatDateTime(video.snippet.publishedAt)}
                </p>
    
            </section>
          )
        })
      }

      </section>
  </main>
  )
}
