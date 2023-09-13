import React from 'react'

export const formatacaoDados = () => {

    const formatDateTime = (dateTimeString: string) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString('pt-BR', 
        { 
          year: "numeric",
          month: "short",
          day: "numeric"
         });
      };
    
      function formatViews(views : number) {
        return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
  return {
    formatDateTime,
    formatViews
  }
}
