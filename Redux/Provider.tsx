'use client';

import { Provider } from 'react-redux'
import { store } from './store';
import React from 'react'
import { ApiProvider } from '@reduxjs/toolkit/query/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
    store={store}
    >


        {children}
    </Provider>
  )
}

