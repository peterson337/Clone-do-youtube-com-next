import React from 'react'

export const customHook = () => {
  
  function formatViews(views : number) {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + 'B'; // Bilhões
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M'; // Milhões
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K'; // Milhares
    } else {
      return views.toString(); // Menos de mil
    }
  }

  const formatDateTime = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };
  return {
    formatViews: formatViews,
    formatDateTime: formatDateTime,
  }
}
