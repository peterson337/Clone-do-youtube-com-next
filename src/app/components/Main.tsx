'use client'
import React, {useState, useEffect} from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchYoutubeData  } from '../../../Redux/features/slice';
import Link from 'next/link'

import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { useRouter } from 'next/navigation'
import { customHook } from '../Search/[id]/hook/customHook';
import {Loading} from "./Loading";


//import Image from 'next/image'


export const Main = () => {
    
  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>();
  
  const youtubeData = useSelector((state: RootState) => state.youtube.data);
  const loading = useSelector((state: RootState) => state.youtube.status === 'loading');
  const error = useSelector((state: RootState) => state.youtube.error);

  const id = 'LvzKS9QX6IA,iRJANcvp724,NDadWPG_JYo,cBVt9Er_4e0,6dklv62aYLk,zgsVG8Annhc,-_lb--PWEMU,iB5LXq4IuDA,bpYQRPZyHwM, c-L5TCdyeIk, Gl1eoQdmgAo,cW4JNHqcuWI,rC6r1ne-BZ0,phWxA89Dy94,KgnJNJk9-to,cJ7xvBkuqiA,ZbX4Ok9YX94,0M8AYU_hPas,SRTNBMVqTNI,rT1MTP-Rrt8,MEtQTB_xyMc,voXTVTW73E8,H91aqUHn8sE,Ca62zSUiTDk,-IPEV6Vs4Z0,urZWmEgm72Q,sSLtqAr32rA,FadWNNDo6ps,piv24m_AFIE,ppDsxbUNtNQ,nkmPmUpUM6U,DihOP19LQdg,b8ZUb_Okxro,0BBtHsbKOsM,MPywGQPLJPo,TJetxzGpbfA,NOVKFU7EhEo,xmxEuQXTHUU,fsJ7YYqr8YU,8NcIOBreZpc,ZFlUFbA2LGc,xh9lAwNr5M8,Uds7g3M-4lQ,4qkLz0N_L6c,pC2pRDL-WoY,CDPsde__6fY,XwRrpaSbaGk,E8c6KnhdCWA,5CUCZKrP3jY,R1XwUfp_lUI';

  const {formatViews, formatDateTime} = customHook();
  
  useEffect(() => {
    dispatch(fetchYoutubeData(id)); // Substitua pela chave correta
  }, [dispatch]);
      //channelTitle

      const selectVideo = (id : string) => {
        router.push(`${id}`);
      }

  return (
    <main
      className=''
    
    >
      <section
      className=' '   
      
      >

        

      {

          loading  ? (
              <Loading></Loading>
              )
              :
              error ? (
              <p className='text-2xl font-bold m-3'>Ocorreu um ao consumir a api do youtube</p> 
              )
              :
              
       <section className='flex md:flex-row  flex-col	flex-wrap justify-center md:justify-start ' >
        {
           youtubeData.map((video: YoutubeVideo) => {
            return(
              <section
              key={video.id}
                className='flex flex-wrap flex-col justify-center text-center items-center mt-3 md:w-[334px]
                           md:m-1 gap-3 md:mt-3 '  
              >
                
                <button
                onClick={ () => selectVideo(video.id) }
                >
  
                <img src={video.snippet.thumbnails.high.url} 
                alt={video.snippet.title}
                className='w-72 md:w-72  rounded-3xl '
                
                 />
                </button>
  
              
           
                
  
              <button onClick={ () => selectVideo(video.id) }
               className="w-80">
                {video.snippet.title}
                </button>
              
                <p
                className='text-[#aaa] mx-12 md:mx-0'
                >
                  <Link
                  href={`/Canal/${video.snippet.channelId}`}
                  >
                  
                  {video.snippet.channelTitle}
                  </Link>
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
       
      }

      </section>
  </main>
  )
}
