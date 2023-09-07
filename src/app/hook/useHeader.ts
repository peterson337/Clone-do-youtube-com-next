'use client'
import React, {useState} from 'react'

export const useHeader = () => {
    const [isSidebar, setIsSidebar] = useState(false)
  return {
    isSidebar,
    openSidebar: () => setIsSidebar(true),
    closeSidebar: () => setIsSidebar(false),
  }
}
