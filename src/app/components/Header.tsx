'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RootState } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { useSelector,useDispatch } from 'react-redux';
import { Sidebar } from "../components/Sidebar"
import { Menu} from "../components/Menu";
import {LogoYoutube} from "../components/LogoYoutube";
import { Form } from './Form';
import { useRouter } from 'next/navigation';
import { changeBoolean, setFalse } from '../../../Redux/features/sidebarSlice';


export const Header = () => {

  const dispatch = useDispatch();
  
  const toggleSidebar = () => {
    dispatch(changeBoolean());
  };

  const router = useRouter();
  const toggleSidebarHome = () => {
    router.push('/')
     dispatch(setFalse());
  };


  const isSidebarOpen = useSelector((state: RootState) => state.sidebarRedux.isSidebar);
  


  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isSidebarOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isSidebarOpen]);



  
  return (
    <header
    className='flex flex-col relative '
    >
      

    <main
    className='bg-black p-2 flex flex-row items-center gap-5'

      >
      <button
        onClick={toggleSidebar}
        >
         <Menu></Menu>

      
        </button>

        <button  
        onClick={toggleSidebarHome}
        >
         <LogoYoutube/>
        </button>


      <Form></Form>
      

      {/* <button
        className='text-[24px] '

      >
       

    <BsCameraVideo></BsCameraVideo>
      </button> */}
      </main>

      <main
      className='top-0'
      >

      {
        isSidebarOpen &&
        <section
        className='fixed z-50'
        >
          <div
          className="bg-[#0f0f0f]  md:w-60 w-48 h-screen border-b border-b-black 
           fixed z-50"
      
          >
        <Sidebar
        ></Sidebar>
      
          </div>
      
        <div
        className="  bg-black/30 w-screen h-screen"
        onClick={toggleSidebar}
        >
      
        </div>
      
        </section>
      
    
      
      }
      </main>


        

    </header>
  )
}
