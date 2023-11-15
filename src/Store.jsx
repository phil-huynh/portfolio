import { useState, useContext, createContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [firstTime, setFirstTime] = useState(true)
  const theme = useTheme()
  const isXL = useMediaQuery(theme.breakpoints.up('xl'))
  const isLG = useMediaQuery(theme.breakpoints.up('lg'))
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  const isSM = useMediaQuery(theme.breakpoints.up('sm'))
  const isXS = useMediaQuery(theme.breakpoints.up('xs'))




  const store = {
    locate: { "border": "white 5px solid" },
    locate2: { "border": "red 10px solid" },
    locate3: { "border": "yellow 5px solid" },
    firstTime: firstTime,
    isXL: isXL,
    isLG: isLG,
    isMD: isMD,
    isSM: isSM,
    isXS: isXS,
    setFirstTime: setFirstTime
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)




