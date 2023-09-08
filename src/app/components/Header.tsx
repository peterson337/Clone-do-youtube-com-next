'use client'
import React,{useEffect} from 'react'
import { ImMenu } from 'react-icons/im';
import { BsSearch, BsCameraVideo } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link'
import {setInputValue}  from "../../.././Redux/features/input";
import { RootState } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { useSelector,useDispatch } from 'react-redux';
import { changeBoolean } from '../../../Redux/features/sidebarSlice';
import { useRouter } from 'next/navigation';
import { Sidebar } from "../components/Sidebar"
import { Menu} from "../components/Menu";
import {LogoYoutube} from "../components/LogoYoutube";


export const Header = () => {

  const inputValue = useSelector((state : any) => state.inputSlice.inputValue);
  
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(changeBoolean());
  };

  const handlerInputSearch = (event : any) => {
    dispatch(setInputValue(event.target.value));
  }

  const router = useRouter();

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
  const submitSearchInput = () => {
        router.push(`/Search/${inputValue}`)
  }


  
  return (
    <header
    className='flex flex-col'
    >
      {
        isSidebarOpen &&
        <section
        >
          <div
            className="bg-[#0f0f0f]  md:w-60 w-48 h-screen border-b border-b-black  fixed z-50"
      
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

    <main
    className='bg-[#0f0f0f] p-2 flex flex-row items-center gap-5'

      >
      <button
        onClick={toggleSidebar}
        >
         <Menu></Menu>

      
        </button>

        <Link href="/" >
         <LogoYoutube/>
        </Link>


       <div
       className=' flex items-center relative'
       >
    
    <input type="text"
    className='w-32 p-1 rounded-full text-white bg-black outline-0 pl-5 border-2 border-[#303030]
              md:ml-40 md:w-[600px] md:p-2
              '
    placeholder='Pesquisar'
    onChange={handlerInputSearch}
     />

      <button
        className='flex justify-center text-[14px] border-l-2 border-[#303030]  relative
                   p-[9px]  right-[30px]
                   md:p-3  md:right-20 bg-[#222]  md:w-[77px]  rounded-r-full md:text-[16px]
                 '
            onClick={submitSearchInput}
      >

      <BsSearch

      ></BsSearch>
      </button>

       </div> 

      {/* <button
        className='text-[24px] '

      >
       

    <BsCameraVideo></BsCameraVideo>
      </button> */}
      </main>

        

    </header>
  )
}
