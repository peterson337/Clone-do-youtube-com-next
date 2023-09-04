'use client';
import React, {useState, useEffect, useRef } from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchYoutubeData  } from '../../../Redux/features/slice';
import { RootState } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { Decrição } from "./hook/decrição";

export default function Page() {

  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    iSComentário,
    iSButton,
     closeComentário,
      openComentário,
      iscrevase,
      cancelarIncricao,
    } = Decrição();

  useEffect(() => {
    
    if (containerRef.current) {
     
      const iframe = containerRef.current.querySelector('iframe');

           if (iframe) {
        
      }
    }
  }, []);

  const formatDateTime = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };

  function formatViews(views : number) {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + 'B'; // Bilhões
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M'; // Milhões
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K'; // Milhares
    } else {
      return views.toString(); // Menos de mil
    }
  }
  
  const youtubeData = useSelector((state: RootState) => state.youtube.data);

    return (
    <main>
        <section>
          {
            youtubeData.map((video: YoutubeVideo) => {
              return( 
              <main
              key={video.id}
              >

              <section
              className='bg-blue-500 md:m-12 md:p-12  md:space-y-5'
              >
              <div 
              dangerouslySetInnerHTML={{ __html: video.player.embedHtml || '' }}
              id='iframe'
              ref={containerRef}
              className=''
              /> 

              <h1
              className='md:w-[489px] w-72 '
              >{video.snippet.title}</h1>

                  <div
                  className='flex flex-row  md:gap-28 items-center gap-5'
                  >
              <p>{video.snippet.channelTitle}</p> 
              <button
              className='bg-[#f1f1f1] text-[#1d1d1d] p-2 rounded-full'
              >Inscreva-se
              </button>
                  </div>



                                                  {/* Descrição  */}
                  {
                    iSComentário?
                  <div
                  className='bg-[#272727] rounded-lg md:p-12 md:w-[600px]'
                  >

                    <div
                    className=''
                    >
                    <div
                    className='flex flex-row md:gap-5'
                    >

                 <p>{formatViews(video.statistics.viewCount)}</p>   
                <p> {formatDateTime(video.snippet.publishedAt)}</p>    
                    </div>

                    <br />

                    <div
                    className=''
                    >

                <p>{video.snippet.description}</p> 
                    </div>

                    </div>
                    



                    <div
                    className='  md:relative md:top-10'
                    >

                   <button
                   onClick={closeComentário}
                   >
                     Mostrar menos
                    </button>

                    </div>



                  </div>

                    :
                    <div
                    onClick={openComentário}
                    className='bg-[#272727] rounded-lg md:p-3 md:h-24 md:w-[600px]
                      cursor-pointer hover:bg-[#696969]'
                    >
  
                      <div
                      className='flex flex-row md:gap-5'
                      >
  
                   <p>{formatViews(video.statistics.viewCount)}</p>   
                  <p> {formatDateTime(video.snippet.publishedAt)}</p>    
                      </div>
  
                      <br />
  
  
                    </div>
                  }

               
              
              </section>                  
              </main>

              )
            })
          }
        </section>
    </main>)
  }