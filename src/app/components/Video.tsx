'use client'
import React,{useEffect} from 'react'
//import  {returnVideoCanal}  from "../../../Redux/features/canalVideo";
import { RootState, AppDispatch } from '../../../Redux/store'; // Certifique-se de que o caminho está correto
import { Props } from "../types/Props";

import { useSelector, useDispatch } from 'react-redux';


export const Video = ({canal} : Props) => {
    
    // const dispatch = useDispatch<AppDispatch>();
    // const video = useSelector((state: RootState) => state.canalVideos.data);
    // useEffect(() => {
    //     dispatch(returnVideoCanal(video))
    // }, [])
    // console.log(canal);
  return (
    <div>Video</div>
  )
}
