import React from 'react'
import Link from 'next/link'
import { Menu} from "../components/Menu";
import {LogoYoutube} from "../components/LogoYoutube";
import { useSelector,useDispatch } from 'react-redux';
import { changeBoolean } from '../../../Redux/features/sidebarSlice';

export const Sidebar = () => {

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(changeBoolean());
  };
// style="pointer-events: none; display: block; width: 100%; height: 100%;"
  return (
    <main
    className='flex flex-col'
    >
      <section
    className='flex flex-row m-4 items-center gap-7'

      >
        <button
        onClick={toggleSidebar}
        >

      <Menu></Menu>
        </button>
      <LogoYoutube></LogoYoutube>
      </section>


      <section
      className='flex flex-row gap-4 m-3 hover:bg-[#272727]/40 p-3  
       rounded-xl cursor-pointer'
      >

        
      <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill='white'>
      <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path></svg>
      <span>
      <Link
      href="/"
      >
        <p>Início</p>
      </Link>
      </span>

      </section>

    </main>
  )
}
