'use client';
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Sidebar } from "./components/Sidebar"
import { useHeader } from "./hook/useHeader"
import { RootState } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { useSelector } from 'react-redux';
import { changeBoolean } from '../../../Redux/features/sidebarSlice';


//import Image from 'next/image'


//TfiMenu


export default function Home() {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebarSlice.isSidebar);

  return (
    <main>

      
      {
        isSidebarOpen?
        <Sidebar></Sidebar>

        :

        <div></div>

      }
             
      <Main></Main>

    </main>
  )
}