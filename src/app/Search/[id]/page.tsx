'use client'
import React, {useState,useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import { videoEspecifico } from "../../../../Redux/features/video";
import { RootState, AppDispatch } from '../../../../Redux/store'; // Certifique-se de que o caminho está correto
import { YoutubeVideo } from "../../types/searchYoutube"; 
import Link from '../../../../node_modules/next/link';

export default function Page(){

  const pathname = usePathname();
  const d = pathname.slice(8);
  const data = useSelector((state : RootState) => state.video.data);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
       dispatch(videoEspecifico(d))
    }, [])
  
    

  return (
    <main
    className='bg-blue-500 md:flex md:flex-col'
    >
     {
          data.map((val : YoutubeVideo) => {
            return(
              <section
              key={val.id.videoId}
              className='bg-red-500 md:flex md:mt-7 md:ml-40 md:flex-row items-start'
              >
                <Link
                href={`/${val.id.videoId}`}
                >
                
                 <img 
                src={val.snippet.thumbnails.high.url}
                className='w-72 md:w-96  rounded-3xl'
                />
                </Link>
        
                <div
                className='md:flex md:flex-col md:m-2'
                >
                  <Link href={`/${val.id.videoId}`} 
                  className='w-96'>
                    {val.snippet.title}
                  </Link>
        
                  <p>{val.snippet.publishTime}</p>
                  <p
                  className='mt-5'
                  >{val.snippet.channelTitle}</p>
                  <p
                  className='mt-5'
        
                  >{val.snippet.description}</p>
        
        
                  
                </div> 
        
        
              </section>
            )
          })
     }
        
    </main>
  )
}
