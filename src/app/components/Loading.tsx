import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loading = () => {
  return (
    <section className='flex text-center flex-col  justify-center items-center gap-2'>
    <p className='text-2xl font-bold m-3'>Carregando</p>

  <Box sx={{ width: '90%' }}>
 <LinearProgress />
</Box>

</section>  )
}
