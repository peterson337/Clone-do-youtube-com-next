import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { BsSearch, BsCameraVideo } from 'react-icons/bs';
import {setInputValue}  from "../../.././Redux/features/input";
import { useRouter } from 'next/navigation';
import { Close } from './Close';


export const Form = () => {

    const inputValue = useSelector((state : any) => state.inputSlice.inputValue);
  
    const dispatch = useDispatch();
    
    const router = useRouter();
    const submitSearchInput = () => {
      router.push(`/Search/${inputValue}`)
}
    
    const handlerInputSearch = (event : any) => {
        dispatch(setInputValue(event.target.value));
      }


    const clearInput = () => {
        dispatch(setInputValue(''));
    }

    

  return (
    <main
    className=' flex items-center relative'

    >
        
    
    <input type="text"
    className='w-32 p-1 rounded-full text-white bg-black outline-0 pl-5 border-2 border-[#303030]
              md:ml-40 md:w-[600px] md:p-2
              '
    placeholder='Pesquisar'
    onChange={handlerInputSearch}
    value={inputValue}
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

        {
            inputValue.length > 0 &&
        <button
        className=' relative right-48 hover:bg-gray-500/40 p-2 rounded-full'
        onClick={clearInput}
        >

      <Close></Close>
        </button>
        }

    </main>
  )
}
