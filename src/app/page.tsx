'use client';
import React, {useEffect} from "react";
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { useHeader } from "./hook/useHeader"
import { RootState } from '../../Redux/store'; // Certifique-se de que o caminho está correto
import { useSelector,useDispatch } from 'react-redux';
import { changeBoolean } from '../../Redux/features/sidebarSlice';

//import Image from 'next/image'


//TfiMenu


export default function Home() {
 

  return (
    <main>

      
     
             
      <Main></Main>

    </main>
  )
}