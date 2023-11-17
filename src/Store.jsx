import { useState, useContext, createContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// Quickstarter Images
import dupPortError from "./assets/quickstarter/dupPortError.png"
import enterMicros from "./assets/quickstarter/enterMicros.png"
import enterQueues from "./assets/quickstarter/enterQueues.png"
import portAndPollerPrompt from "./assets/quickstarter/portAndPollerPrompt.png"
import portNumberError from "./assets/quickstarter/portNumberError.png"
import startProject from "./assets/quickstarter/startProject.png"
import viteSetup from "./assets/quickstarter/viteSetup.png"
import volumeAndPort from "./assets/quickstarter/volumeAndPort.png"

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [firstTime, setFirstTime] = useState(true)
  const theme = useTheme()
  const isXL = useMediaQuery(theme.breakpoints.up('xl'))
  const isLG = useMediaQuery(theme.breakpoints.up('lg'))
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  const isSM = useMediaQuery(theme.breakpoints.up('sm'))
  const isXS = useMediaQuery(theme.breakpoints.up('xs'))


const quickstarterPhotos = {
  dupPortError: dupPortError,
  enterMicros: enterMicros,
  enterQueues: enterQueues,
  portAndPollerPrompt: portAndPollerPrompt,
  portNumberError: portNumberError,
  startProject: startProject,
  viteSetup: viteSetup,
  volumeAndPort: volumeAndPort,
}


const eCommImages = {
  overview: [
    "https://media.giphy.com/media/ovB7jDDERqLsZMzp7k/giphy.gif",
    "https://media.giphy.com/media/EWbhbJQRj7WnWQYEUg/giphy.gif",
    "https://media.giphy.com/media/1lL5VlO0ZNoM97pyBr/giphy.gif",
    "https://media.giphy.com/media/569wd5FwlwKZv8V2iZ/giphy.gif",
    "https://media.giphy.com/media/pPpvR9Jhi29LZ3qGZX/giphy.gif",
    "https://media.giphy.com/media/vGCJXF0QfZTYZwwxN3/giphy.gif",
    "https://media.giphy.com/media/7jmqevBMiHwid10yVT/giphy.gif",
  ],
  questions: [
    "https://media.giphy.com/media/YKqzzJ5TpHe6bAgjoO/giphy.gif",
    "https://media.giphy.com/media/AWhox7RwSC75LgEJzA/giphy.gif",
    "https://media.giphy.com/media/FlGcgwYUv4j5eaHu6k/giphy.gif",
    "https://media.giphy.com/media/eqt1S1Ye859jWRHimk/giphy.gif",
    "https://media.giphy.com/media/tYKArUvD78A8bKF41L/giphy.gif",
    "https://media.giphy.com/media/LTtCBmIBEOMo4vXoQq/giphy.gif",
  ],
  reviews : [
    "https://media.giphy.com/media/klv6Bo0sVmqFlfIb2y/giphy.gif",
    "https://media.giphy.com/media/Nw9FvcLMKHptSHYcKL/giphy.gif",
    "https://media.giphy.com/media/pPORlVOOCJWSsbtFOm/giphy.gif",
    "https://media.giphy.com/media/gF0I6akl8W0t4gguUX/giphy.gif"
  ]
}

const osirisImages = {
  mobile: [
    "https://media.giphy.com/media/HPt5OekCz5XZR5GLpN/giphy.gif",
    "https://media.giphy.com/media/35TeChHRBB1Zc7e3ew/giphy.gif",
    "https://media.giphy.com/media/fIuud07btnCNoKRVmb/giphy.gif",
    "https://media.giphy.com/media/H47rgIuBFw7g0iIG1V/giphy.gif",
    "https://media.giphy.com/media/9BtupnUJlFLHMYUqKP/giphy.gif",
    "https://media.giphy.com/media/c8qLLR7SJTNCf4J16u/giphy.gif",
    "https://media.giphy.com/media/mFelNZeuET2CKmok0A/giphy.gif",
    "https://media.giphy.com/media/zhBSjaqLXsviVvOkCQ/giphy.gif",
    "https://media.giphy.com/media/80BvP34vS4esPPCqWI/giphy.gif",
    "https://media.giphy.com/media/2yPiSAunimoAPlP7Ta/giphy.gif",
    "https://media.giphy.com/media/zsPCksYyhZXivc1oMt/giphy.gif",
    "https://media.giphy.com/media/lNp0gwsXUP6gdUqqsm/giphy.gif",
    "https://media.giphy.com/media/zsPCksYyhZXivc1oMt/giphy.gif",
  ],
  desktop: [
    "https://media.giphy.com/media/0Mm6noiioGANaMbS8n/giphy.gif",
    "https://media.giphy.com/media/Tu0zkb61zEYkJN4VE6/giphy.gif"
  ],
  tablet: "https://media.giphy.com/media/5Diu7UQyjYdrgMCN6X/giphy.gif",
}


  const store = {
    locate: { "border": "blue 5px solid" },
    locate2: { "border": "red 10px solid" },
    locate3: { "border": "yellow 5px solid" },
    firstTime: firstTime,
    isXL: isXL,
    isLG: isLG,
    isMD: isMD,
    isSM: isSM,
    isXS: isXS,
    eCommImages: eCommImages,
    osirisImages: osirisImages,
    quickstarterPhotos: quickstarterPhotos,
    setFirstTime: setFirstTime,
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)




