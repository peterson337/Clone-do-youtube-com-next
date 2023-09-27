import React from 'react'

export const formatarInscritos = () => {

    function format(quantidade : number) {
        if (quantidade >= 1000) {
          const milhar = (quantidade / 1000).toFixed(1);
          return `${milhar.replace('.', ',')} mil`;
        }
        return quantidade.toLocaleString(); // Usar o toLocaleString para formatar com vírgulas
      }
      
  return {
    format,
  }
}
