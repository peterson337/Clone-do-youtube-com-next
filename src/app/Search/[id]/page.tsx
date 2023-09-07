'use client'
import React, {useState,useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import { videoEspecifico } from "../../../../Redux/features/video";
import { RootState, AppDispatch } from '../../../../Redux/store'; // Certifique-se de que o caminho está correto
import { YoutubeVideo } from "../../types/searchYoutube"; 
import Link from '../../../../node_modules/next/link';
import { customHook } from "./hook/customHook";

export default function Page(){

  const pathname = usePathname();
  const d = pathname.slice(8);
  const data = useSelector((state : RootState) => state.video.data);
  const dispatch = useDispatch<AppDispatch>();
  const {formatDateTime} = customHook();
    useEffect(() => {
       dispatch(videoEspecifico(d))
    }, [])
  
    

  return (
    <main
    className='bg-blue-500 md:flex md:flex-col'
    >
     {
          data.map((val : YoutubeVideo) => {
          const isChannel = val.id.kind === 'youtube#channel';

            return(
              <section
              key={val.id.videoId}
              className='md:flex md:mt-7 md:ml-40 md:flex-row md:items-start mb-5'
              >
                
        
                <Link
                href={`/${isChannel? '/' :val.id.videoId}`}
                >
                
                 <img 
                src={val.snippet.thumbnails.high.url}
                className={`${isChannel? 'w-32 rounded-full   rounded-3xl mt-5' : 'md:w-96  rounded-3xl'}`}
                />
                </Link>
                
                <div
                className={`${isChannel? ' ' : 'md:flex md:flex-col md:m-2 '}`}
                >
                  <Link
                href={`/${isChannel? '/' :val.id.videoId}`}
 
                  className={`${isChannel? 'w-96 ' : 'w-96 text-[20px]'}`}>
                    {val.snippet.title}
                  </Link>
        
                    {
                      !isChannel &&
                  <p
                  className='text-[#aaa]'
                  >{formatDateTime(val.snippet.publishTime)}</p>
                    }

                  <p
                  className='mt-5 text-[#aaa]'
                  >
                
                    {val.snippet.channelTitle}</p>
                  <p
                  className='mt-5 text-[#aaa]'
        
                  >{val.snippet.description}</p>
        
        
                  
                </div> 
        
        
              </section>
            )
          })
     }
        
    </main>
  )
}
