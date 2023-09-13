import React from 'react'

export const customHook = () => {
  
  function formatViews(views : number) {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const formatDateTime = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('pt-BR', 
    { 
      year: "numeric",
      month: "short",
      day: "numeric"
     });
  };
  return {
    formatViews: formatViews,
    formatDateTime: formatDateTime,
  }
}
