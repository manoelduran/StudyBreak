import { createContext, useState, ReactNode, useContext } from 'react';

interface CountdownContextData {

}

interface CountdownContextProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData)
export function CountdownContextProvidder({ children }: CountdownContextProviderProps) {
  return (
    <CountdownContext.Provider value={{}}>
      {children}
    </CountdownContext.Provider>
  )
}