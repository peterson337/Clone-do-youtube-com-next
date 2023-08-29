import React from 'react'
import { ImMenu } from 'react-icons/im';
import { BsSearch, BsCameraVideo } from 'react-icons/bs';
import Image from 'next/image'

export const Header = () => {


  return (
    <header
    className='bg-blue-500 p-4 flex flex-row items-center gap-5'
    >
        <button
        >

        <ImMenu/>
        </button>

        <Image
      src="https://www.gstatic.com/youtube/img/promos/growth/7207b4b78b0d4cdaccc986e8a6e3b807d358690c06efbb163362ff239bf31e75_122x56.png"
      width={90}
      height={90}
      alt="youtube logo"
    />

        
    <input type="text"
    className='w-28 '
     />

    <BsSearch></BsSearch>

    <BsCameraVideo></BsCameraVideo>

    </header>
  )
}
