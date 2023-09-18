'use client';

import React, {useState, useEffect} from "react";
import { canalEspecifico  } from '../../../../Redux/features/canal';
import { RootState, AppDispatch } from '../../../../Redux/store'; // Certifique-se de que o caminho está correto
import { setVideo, setSobre, changeBooleanCanal} from '../../../../Redux/features/canalBoolean';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname  } from 'next/navigation'
import { CanalYoutube } from "../../../../Redux/types/canalTypes";



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
                                {/* <p>{canal.snippet.description}</p> */}

                                </div>


                            </div>

                                <nav
                                className=""
                                >
                                    <ul
                                    className="  ml-14 flex flex-row gap-10 "
                                    >
                                        <li
                                        className="border-b-4 border-[#aaa]"
                                        >Vídeo</li>
                                        <li>Sobre</li>
                                    </ul>

                                    <hr 
                                    className="  border-[#3f3f3f] h-1"

                                    />
                                </nav>

                        </section>
                    )
                })
            }
            
        </main>
    )
}