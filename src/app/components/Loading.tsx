import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loading = () => {
  return (
    <section className='flex text-center flex-col  justify-center items-center gap-2 h-screen '>

      <div className='flex flex-col w-72 md:w-[800px]  justify-center item-center  items-center gap-3'>
    <p className='text-3xl font-bold  '>Carregando</p>

  <Box sx={{ width: '100%' }} color="error">
 <LinearProgress   className='p-2 rounded-full' color="error"/>
</Box>

      </div>

</section>  )
}
