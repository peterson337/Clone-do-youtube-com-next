'use client';
import React, {useState, useEffect, useRef } from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchYoutubeData  } from '../../../Redux/features/slice';
import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { usePathname  } from 'next/navigation'
import { Decrição } from "./hook/decrição";
import { formatacaoDados } from '@/app/[id]/hook/formatacaoDados';

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
          // Ajuste a largura e altura do iframe como desejado
          iframe.style.width = '50px'; // Isso definirá a largura como 10px
          iframe.style.height = '100%'; // Isso definirá a altura como 100%
        }
      }
    }, []);
    

      const {formatDateTime,
        formatViews} = formatacaoDados();

      const youtubeData = useSelector((state: RootState) => state.youtube.data);
      const dispatch = useDispatch<AppDispatch>();
      const pathname = usePathname();
      const id = pathname.slice(1);

      useEffect(() => {
        dispatch(fetchYoutubeData(id)); // Substitua pela chave correta
      }, [dispatch]);
          //channelTitle

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
              className='md:m-12 md:p-12  md:space-y-5 p-3'
              >
                <div
                dangerouslySetInnerHTML={{ __html: video.player.embedHtml || '' }}
                id='iframe'
                ref={containerRef}
                // className='w-12' // Defina o tamanho máximo do conteúdo
              /> 

              <h1
              className='w-72  mt-5
                         md:w-[489px] md:ml-0'
              >{video.snippet.title}</h1>

                  <div
                  className='flex flex-row  md:gap-28 items-center gap-5  mb-5
                              md:ml-0 md:mb-0'
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
                  className='bg-[#272727] rounded-lg p-5
                              md:p-12 md:w-[600px]'
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
                    <p
                    >
                      {video.snippet.description}
                    </p> 

                    </div>

                    </div>
                    



                    <div
                    className=' relative top-8 pb-5  
                                md:relative md:top-10 md:pb-0'
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
                      cursor-pointer hover:bg-[#696969] p-5'
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


  