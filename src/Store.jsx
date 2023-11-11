import { useState, useContext, createContext } from 'react'

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {






  const store = {
    locate: { "border": "white 5px solid" },
    locate2: { "border": "red 10px solid" },
    locate3: { "border": "yellow 5px solid" },
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)




