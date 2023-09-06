'use client'
import React, {useState,useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import { videoEspecifico } from "../../../../Redux/features/video";
import { RootState, AppDispatch } from '../../../../Redux/store'; // Certifique-se de que o caminho está correto
;

export default function Page(){

  const pathname = usePathname();
  const d = pathname.slice(8);
  const inputValue = useSelector((state : RootState) => state.video.data);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
       dispatch(videoEspecifico(d))
    }, [])
  
    

  return (
    <main
    className='bg-blue-500 md:flex md:flex-col'
    >
     {
          inputValue.map((val : any) => {
            return(
              <section
              key={val.id}
              className='bg-red-500 md:flex md:mt-7 md:ml-40 md:flex-row items-start'
              >
                {/* <img 
                src="https://i.ytimg.com/vi/iN-5BcUefVE/maxresdefault.jpg"
                className='w-72 md:w-96  rounded-3xl'
                />
        
                <div
                className='md:flex md:flex-col md:m-2'
                >
                  <h1
                  className='  text-2xl'
                  >
                  titulo do canal
                </h1>
        
                  <p>vizualização data do vídeo</p>
                  <p
                  className='mt-5'
                  >nome do canal</p>
                  <p
                  className='mt-5'
        
                  >Descrição do canal...</p>
        
        
                  
                </div> */}
        
        
              </section>
            )
          })
     }
        
    </main>
  )
}
