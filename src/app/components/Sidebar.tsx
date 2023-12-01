import React from 'react'
import {useDispatch } from 'react-redux';
import { changeBoolean } from '../../../Redux/features/sidebarSlice';
import { Home } from './Home';
import { useRouter } from 'next/navigation'

export const Sidebar = () => {
  const router = useRouter()

  const dispatch = useDispatch();
  
  const toggleSidebar = () => {
    router.push('/')
     dispatch(changeBoolean());
  };

// style="pointer-events: none; display: block; width: 100%; height: 100%;"
  return (
    <main
    className='flex flex-col '
    >
   

      <button
      onClick={toggleSidebar}
      >
        {/* COR DA BORDA #3f3f3f */}
        <div className=' mx-4'>

      <section
      className='flex flex-row gap-4 m-3 hover:bg-[#272727]/40 p-3  
       hover:rounded-xl cursor-pointer '
      >


     <Home></Home>

        <p>Início</p>
      </section>
        </div>


      </button>



    </main>
  )
}
