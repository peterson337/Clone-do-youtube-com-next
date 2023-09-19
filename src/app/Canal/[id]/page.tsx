'use client';

import React, {useState, useEffect} from "react";
import { canalEspecifico  } from '../../../../Redux/features/canal';
import { RootState, AppDispatch } from '../../../../Redux/store'; // Certifique-se de que o caminho está correto
import { setVideo, setSobre, changeBooleanCanal} from '../../../../Redux/features/canalBoolean';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname  } from 'next/navigation'
import { CanalYoutube } from "../../../../Redux/types/canalTypes";
import { Video } from "@/app/components/Video";



export default function Page(){

    const canalData = useSelector((state: RootState) => state.canal.data);
    const changeBoolean = useSelector((state: RootState) => state.changeNav.isNav);
    const dispatch = useDispatch<AppDispatch>();
    const pathname = usePathname();
    const id = pathname.slice(7);

    useEffect(() => {
         dispatch(canalEspecifico(id))
    }, [id])

  

    return(
        <main>
            {
                canalData.map((canal: CanalYoutube) => {
                    return(
                        <section
                        key={canal.id}>
                            <div>
                            <img 
                            src={canal.brandingSettings.image.bannerExternalUrl} 
                            alt={canal.snippet.title}
                            className='bg-blue-500 w-[100%] md:h-52 h-32 object-cover'
                             />

                            </div>

                            <div
                            className="m-5 md:ml-32 flex flex-row gap-2 justify-center md:justify-start"
                            >
                                <img 
                                src={canal.snippet.thumbnails.default.url} 
                                alt={canal.snippet.title}
                                className='rounded-[50%] w-28 md:w-32'
                                />

                                <div
                                className="flex flex-col ml-5 "
                                >
                                <h2>{canal.snippet.title}</h2>

                                <p>{canal.snippet.customUrl}</p>
                                    <p>{canal.statistics.subscriberCount}</p>
                                    <p>{canal.statistics.videoCount}</p>

                                </div>


                            </div>

                                <nav
                                className=""
                                >
                                    <ul
                                    className="  ml-14 flex flex-row gap-10 "
                                    >
                                        <li
                                        className={ changeBoolean === 'video'? `border-b-4 border-[#aaa] cursor-pointer`
                                         :
                                          `cursor-pointer`}
                                            onClick={() => dispatch(setVideo())}
                                        >
                                            Vídeo
                                        </li>

                                        <li
                                        className={ changeBoolean === 'sobre'? `border-b-4 border-[#aaa] cursor-pointer`
                                         :
                                          `cursor-pointer`}

                                        onClick={() => dispatch(setSobre())}
                                        >
                                            Sobre
                                        </li>
                                    </ul>

                                    <hr 
                                    className="  border-[#3f3f3f] h-1"

                                    />
                                </nav>

                                {
                            changeBoolean === 'video' ? (
                                <Video
                                canal={canal.id}
                                ></Video>
                            ) : (
                                <div
                                className="m-4 p-4 pb-10 flex flex-col gap-5 text-center  border-b border-[#3f3f3f]
                                md:text-start  md:ml-24 md:mx-96"
                                >
                                <p>Descrição</p>
                                {canal.snippet.description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                                </div>
                            )}



                        </section>
                    )
                })
            }
            
        </main>
    )
}