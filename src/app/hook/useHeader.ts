'use client'
import React, {useState} from 'react'

export const useHeader = () => {
    const [isSidebar, setIsSidebar] = useState(true)
  return {
    isSidebar,
    setIsSidebar
  }
}
