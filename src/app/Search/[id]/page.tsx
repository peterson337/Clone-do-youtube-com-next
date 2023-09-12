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
    className=' md:flex md:flex-col'
    >
      
     {
          data.map((val : YoutubeVideo) => {
          const isChannel = val.id.kind === 'youtube#channel';

            return(
              <section
              key={val.snippet.title}
              className='md:flex md:mt-7 md:ml-40 md:flex-row md:items-start mb-5 '
              >
                
                <div

                className='flex md:justify-start justify-center '
                >
                <Link
                href={`/${isChannel? '/' :val.id.videoId}`}
                className=''
                >
                
                 <img 
                src={val.snippet.thumbnails.high.url}
                className={`${isChannel? 
                'w-32 rounded-full  rounded-3xl mt-5 md:mr-28 md:ml-32 mb-5 md:mb-0' 
                : 'md:w-96 w-72  rounded-3xl mb-5 md:mb-0'}`}
                />
                </Link>

                </div>

                {/* {!isChannel &&
                <p>Vídeo mais recente do canal {d}</p>
                } */}
                
                <div
                className={`${isChannel? 
                  'md:mt-5  justify-center md:justify-start text-center md:text-start'
                 : 
      'md:flex md:flex-col md:m-2 md:ml-7 justify-center text-center md:text-start md:justify-start gap-3 md:gap-0 md:mt-7 '}`}
                >
                  <p
                    className={`${isChannel? 'md:w-96 text-center md:text-start ' 
                    : 'md:w-96 text-[20px] md:text-start text-center mx-12 md:mx-0    '}`}

                  >
                  <Link
                href={`/${isChannel? '/' :val.id.videoId}`}
                
                >
 
                    {val.snippet.title}
                  </Link>
                  
                  

                  </p>
        
                    {
                      !isChannel &&
                  <p
                  className='text-[#aaa] text-center md:text-start '
                  >{formatDateTime(val.snippet.publishTime)}</p>
                    }

                  <p
                  className={`${isChannel? 'text-[#aaa] md:w-[700px] text-center md:text-start' : 'mt-5 text-[#aaa] text-center md:text-start'} `}
                  >
                
                    {val.snippet.channelTitle}</p>
                  <p
                  className={`${isChannel? 'text-[#aaa] md:w-[500px] text-center md:text-start mx-12 md:mx-0' : 'mt-5 text-[#aaa] md:w-[700px] mx-12 md:mx-0' }`}
        
                  >{val.snippet.description}</p>
        
        
                  
                </div> 
        
        
              </section>
            )
          })
     }
        
    </main>
  )
}
