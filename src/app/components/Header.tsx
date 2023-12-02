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
    className='flex flex-col fixed w-full top-0'
    >
      

    <main
    className='bg-black p-2 flex flex-row items-center  md:px-10  justify-start  '

      >

        <div className='flex flex-row items-center  w-[70%]  justify-between gap-3'>
        <div className='flex flex-row items-center w-36 md:justify-between gap-3 md:gap-0'>
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

        </div>


      <Form></Form>

        </div>


      

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
        <main
        className='fixed z-50'
        >
          <section
          className="bg-[#0f0f0f]  md:w-60 w-48 h-screen border-b border-b-black 
           fixed z-50 top-0"
      
          >

          <div className='flex flex-row m-3 gap-5'>

          <button onClick={toggleSidebar}><Menu></Menu></button>

          <button onClick={toggleSidebarHome}><LogoYoutube/></button>

          </div>


        <Sidebar
        ></Sidebar>
      
          </section>
      
        <div
        className="  bg-black/30 w-screen h-screen fixed z-40 top-0"
        onClick={toggleSidebar}
        >
      
        </div>
      
        </main>
      
    
      
      }
      </main>


        

    </header>
  )
}
