import React from 'react'

export const customHook = () => {
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
    formatDateTime: formatDateTime,
  }
}
