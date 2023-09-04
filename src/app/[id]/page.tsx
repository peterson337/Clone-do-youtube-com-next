'use client';
import React, {useState, useEffect} from 'react'
import { YoutubeVideo, YoutubeResponse } from '../types/Youtube'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchYoutubeData  } from '../../../Redux/features/slice';
import { RootState } from '../../../Redux/store'; // Certifique-se de que o caminho está correto

export default function Page() {
  
  const youtubeData = useSelector((state: RootState) => state.youtube.data);

    return (
    <main>
        <section>
          {
            youtubeData.map((video: YoutubeVideo) => {
              return( 
              <div
              key={video.id}
              >
                    {/* <p>{video.snippet.description}</p> */}

      
         <div dangerouslySetInnerHTML={{ __html: video.player?.embedHtml || '' }} /> 
              </div>

              )
            })
          }
        </section>
    </main>)
  }