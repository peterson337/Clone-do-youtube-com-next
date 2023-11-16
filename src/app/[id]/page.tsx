'use client';
import React, {useState, useEffect, useRef } from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { requisicao  } from '../../../Redux/features/assitirVideo';
import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { usePathname  } from 'next/navigation'
import { Decrição } from "./hook/decrição";
import { formatacaoDados } from '@/app/[id]/hook/formatacaoDados';
import Link from 'next/link'

import canal from '../../../Redux/features/canal';

import axios  from "axios";


export default function Page() {


  const {
    iSComentário,
    iSButton,
     closeComentário,
      openComentário,
      iscrevase,
      cancelarIncricao,
    } = Decrição();


    

      const {formatDateTime,
        formatViews} = formatacaoDados();

      const youtubeData = useSelector((state: RootState) => state.assistir.dataVideo);
      console.log(youtubeData)
      const loading = useSelector((state: RootState) => state.assistir.status === 'loading');
      const erro = useSelector((state: RootState) => state.assistir.error);
      const dispatch = useDispatch<AppDispatch>();
      const pathname = usePathname();
      const idVideo = pathname.slice(1);

      useEffect(() => {
        dispatch(requisicao(idVideo)); // Substitua pela chave correta
          

        const incricao = youtubeData.filter((val : YoutubeVideo) => val.snippet);
        
        //  axios.post('http://localhost:5000/historico', JSON.stringify( {incricao}), {
          //   headers: {
          //     'Content-Type': 'application/json'
          // }
          //  }).then((response : any) => {
            //   console.log(response.data);
            //  })
        
      }, [dispatch]);
          //channelTitle

    return (
    <main
    
    >
        <section
        className='flex justify-center md:justify-start '
        >
          {

            loading  ? (
              
              <section className='flex text-center  justify-center items-center'>
                    <p className='text-2xl font-bold m-3'>Carregando...</p> 

                  </section>
                )
                :
                erro ? (
                 <p className='text-2xl font-bold m-3'>Ocorreu um ao consumir a api do youtube</p> 
                )
                :
            youtubeData.map((video: YoutubeVideo) => {

              const url = video.player.embedHtml.match(/src="(.*?)"/)[1];

              return( 
              <main
              key={video.id}
              >

              <section
              className='   md:space-y-5 p-3 items-center'
              >
                                  
                <iframe
                className='w-[330px] h-80 md:w-[739px] md:h-[500px] rounded-[20px]'
                  src={url}
                 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                  allowFullScreen
                />

              <h2
              className='w-80  mt-5 mb-4 md:mb-0
                         md:w-[700px] md:ml-0 md:text-[22px] text-[19px]'
              >{video.snippet.title}
              </h2>

                  <div
                  className='flex flex-row  md:gap-28 items-center gap-5  mb-5
                              md:ml-0 md:mb-0'
                  >
              <p>
                <Link href={`/Canal/${video.snippet.channelId}`}>
                {video.snippet.channelTitle}
                </Link>
              </p> 
              <button
              className='bg-[#f1f1f1] text-[#1d1d1d] p-2 rounded-full'
              >Inscreva-se            

              </button>
                  </div>



                                                  {/* Descrição  */}
                  {
                    iSComentário?
                  <section
                  className='bg-[#272727] rounded-[20px] w-80 p-1  md:w-[600px] '


                  >

                
                
                      <div
                      className='m-5 flex flex-col gap-2 md:flex-row'
                      >
                        <span
                      className=' flex flex-row gap-2'

                        >

                 <p>{formatViews(video.statistics.viewCount)}</p>   
                 visualizações 
                        </span>
                <p> {formatDateTime(video.snippet.publishedAt)}</p>     
                      </div>


                 
                    <div
                        className='break-words m-5 flex flex-col gap-5'
                    >

                          {video.snippet.description.split('\n').map((line : string, index : number) => (
                                    <p key={index}
                                    >
                                      {line}
                                    </p>
                                ))}
          

                    </div>

                    



                  

                  <button
                  className='m-5'
                   onClick={closeComentário}
                   >
                     Mostrar menos
                    </button> 




                  </section>

                                                  //!  Fim da  Descrição  

                    :
                    <section
                    onClick={openComentário}
                    className='bg-[#272727] rounded-[20px] p-2
                    md:p-12 md:w-[600px] justify-start'
                    >
  
                  <div
                    className='flex flex-row md:gap-2 gap-1'
                    >

                 <p>{formatViews(video.statistics.viewCount)}</p>   
                 visualizações 
                <p> {formatDateTime(video.snippet.publishedAt)}</p>    
                    </div>
  
                      <br />
  
  
                    </section>
                  }

               
              
              </section>                  
              </main>

              )
            })
          }
        </section>
    </main>)

  }


  