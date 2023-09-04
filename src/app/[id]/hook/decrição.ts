'use client'
    import React, {useState} from 'react'

export const Decrição = () => {
    const [iSComentário, setiSComentário] = useState(false);
    const [iSButton, setISButton] = useState(false);

  return {
            iSComentário,
            closeComentário: () => setiSComentário(false),
            openComentário: () => setiSComentário(true),

            iSButton,
            iscrevase: () => setISButton(true),
            cancelarIncricao: () => setISButton(false),

  }
}
