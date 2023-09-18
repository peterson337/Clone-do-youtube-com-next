'use client';

import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { canalEspecifico  } from '../../../../Redux/features/canal';
import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { usePathname  } from 'next/navigation'




export default function Page(){

    const canalData = useSelector((state: RootState) => state.canal.data);
    const dispatch = useDispatch<AppDispatch>();
    const pathname = usePathname();
    const id = pathname.slice(8);


    useEffect(() => {
         dispatch(canalEspecifico(id))
    }, [id])
    


    return(
        <main>
            
        </main>
    )
}