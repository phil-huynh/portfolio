// Strings Theory Photos
import alterations from "./assets/strings_theory/alterations.png"
import capo from "./assets/strings_theory/capo.png"
import chordDash from "./assets/strings_theory/chordDash.png"
import chord1DegsMapScales from "./assets/strings_theory/chord1DegsMapScales.png"
import chord2DegsMapScales from "./assets/strings_theory/chord2DegsMapScales.png"
import fiveStringNeck from "./assets/strings_theory/fiveStringNeck.png"
import focus1MapChords from "./assets/strings_theory/focus1MapChords.png"
import focusChord1MapScales from "./assets/strings_theory/focusChord1MapScales.png"
import focusChord2MapScales from "./assets/strings_theory/focusChord2MapScales.png"
import focus2DegsMapChords from "./assets/strings_theory/focus2DegsMapChords.png"
import leftHanded from "./assets/strings_theory/leftHanded.png"
import leftyNeck from "./assets/strings_theory/leftyNeck.png"
import mapScalesPage from "./assets/strings_theory/mapScalesPage.png"
import noteNames from "./assets/strings_theory/noteNames.png"
import oneChordInMapScales from "./assets/strings_theory/oneChordInMapScales.png"
import scalesDash from "./assets/strings_theory/scalesDash.png"
import scaleDegrees from "./assets/strings_theory/scaleDegrees.png"
import scalesMenu from "./assets/strings_theory/scalesMenu.png"
import sectionNeck from "./assets/strings_theory/sectionNeck.png"
import selectedNoteNoChord from "./assets/strings_theory/selectedNoteNoChord.png"
import selectedNoteWithChord from "./assets/strings_theory/selectedNoteWithChord.png"
import selectedNoteTwoChords from "./assets/strings_theory/selectedNoteTwoChords.png"
import solfege from "./assets/strings_theory/solfege.png"
import standardNeck from "./assets/strings_theory/standardNeck.png"
import tonicMenu from "./assets/strings_theory/tonicMenu.png"
import topDash from "./assets/strings_theory/topDash.png"
import twoChordsMapScales from "./assets/strings_theory/twoChordsMapScales.png"
import twoNamesMapChords from "./assets/strings_theory/twoNamesMapChords.png"
import tuningMenu from "./assets/strings_theory/tuningMenu.png"
import ukeNeck from "./assets/strings_theory/ukeNeck.png"
import viewMenu from "./assets/strings_theory/viewMenu.png"
import violinNeck from "./assets/strings_theory/violinNeck.png"

// Quickstarter Images
import dupPortError from "./assets/quickstarter/dupPortError.png"
import enterMicros from "./assets/quickstarter/enterMicros.png"
import enterQueues from "./assets/quickstarter/enterQueues.png"
import portAndPollerPrompt from "./assets/quickstarter/portAndPollerPrompt.png"
import portNumberError from "./assets/quickstarter/portNumberError.png"
import startProject from "./assets/quickstarter/startProject.png"
import viteSetup from "./assets/quickstarter/viteSetup.png"
import volumeAndPort from "./assets/quickstarter/volumeAndPort.png"

import osirisCardImage from "./assets/osiris/osirisCardImage.png"
import ecomCardImage from "./assets/e_commerce/ecomCardImage.png"

import { useState, useContext, createContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [firstTime, setFirstTime] = useState(true)
  const [selection, setSelection] = useState('skills')

  const theme = useTheme()
  const isXL = useMediaQuery(theme.breakpoints.up('xl'))
  const isLG = useMediaQuery(theme.breakpoints.up('lg'))
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  const isSM = useMediaQuery(theme.breakpoints.up('sm'))
  const isXS = useMediaQuery(theme.breakpoints.up('xs'))



const projectsList = [
  { name: "Strings Theory", image: twoChordsMapScales, aspect: "1.69", path: "strings-theory" },
  { name: "Quickstarter", image: enterQueues, aspect: "1.56", path: "quickstarter" },
  { name: "Sales Probabilities", image: "", aspect: "", path: "sales-probabilities" },
  { name: "Osiris", image: osirisCardImage, aspect: "1.63", path: "osiris" },
  { name: "ecomm", image: ecomCardImage, aspect: "1.68", path: "ecommerce" },
]





const stringsPhotos = {
  alterations: {
    image: alterations,
    aspect: "1.69"
  },
  capo: {
    image: capo,
    aspect: "1.69"
  },
  chordDash: {
    image: chordDash,
    aspect: "1.89"
  },
  chord1DegsMapScales: {
    image: chord1DegsMapScales,
    aspect: "1.69"
  },
  chord2DegsMapScales: {
    image: chord2DegsMapScales,
    aspect: "1.69"
  },
  fiveStringNeck: {
    image: fiveStringNeck,
    aspect: "5.45"
  },
  focusChord1MapScales: {
    image: focusChord1MapScales,
    aspect: "1.69"
  },
  focusChord2MapScales: {
    image: focusChord2MapScales,
    aspect: "1.69"
  },
  focus1MapChords: {
    image: focus1MapChords,
    aspect: "1.69"
  },
  focus2DegsMapChords: {
    image: focus2DegsMapChords,
    aspect: "1.69"
  },
  leftyNeck: {
    image: leftyNeck,
    aspect: "5.45"
  },
  leftHanded: {
    image: leftHanded,
    aspect: "1.69"
  },
  mapScalesPage: {
    image: mapScalesPage,
    aspect: "1.69"
  },
  noteNames: {
    image: noteNames,
    aspect: "5.74"
  },
  oneChordInMapScales: {
    image: oneChordInMapScales,
    aspect: "1.69"
  },
  scalesDash: {
    image: scalesDash,
    aspect: "5.6"
  },
  scaleDegrees: {
    image: scaleDegrees,
    aspect: "5.74"
  },
  scalesMenu: {
    image: scalesMenu,
    aspect: ".56"
  },
  sectionNeck: {
    image: sectionNeck,
    aspect: "1.69"
  },
  selectedNoteNoChord: {
    image: selectedNoteNoChord,
    aspect: "2.43"
  },
  selectedNoteWithChord: {
    image: selectedNoteWithChord,
    aspect: "2.43"
  },
  selectedNoteTwoChords: {
    image: selectedNoteTwoChords,
    aspect: "2.43"
  },
  solfege: {
    image: solfege,
    aspect: "5.74"
  },
  standardNeck: {
    image: standardNeck,
    aspect: "5.45"
  },
  tonicMenu: {
    image: tonicMenu,
    aspect: ".29"
  },
  topDash: {
    image: topDash,
    aspect: "12.62"
  },
  tuningMenu: {
    image: tuningMenu,
    aspect: ".68"
  },
  twoNamesMapChords: {
    image: twoNamesMapChords,
    aspect: "1.69"
  },
  twoChordsMapScales: {
    image: twoChordsMapScales,
    aspect: "1.69"
  },
  ukeNeck: {
    image: ukeNeck,
    aspect: "5.45"
  },
  viewMenu: {
    image: viewMenu,
    aspect: "2.79"
  },
  violinNeck: {
    image: violinNeck,
    aspect: "5.45"
  },
}


const quickstarterPhotos = {
  dupPortError: {
    image: dupPortError,
    aspect: "2.35"
  },
  enterMicros: {
    image: enterMicros,
    aspect: ".51"
  },
  enterQueues: {
    image: enterQueues,
    aspect: "1.56"
  },
  portAndPollerPrompt: {
    image: portAndPollerPrompt,
    aspect: "1.33"
  },
  portNumberError: {
    image: portNumberError,
    aspect: "2.13"
  },
  startProject: {
    image: startProject,
    aspect: "10"
  },
  viteSetup: {
    image: viteSetup,
    aspect: "2.64"
  },
  volumeAndPort: {
    image: volumeAndPort,
    aspect: "4.78"
  },
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
    locate: { "border": "blue 1px solid" },
    locate2: { "border": "red 1px solid" },
    locate3: { "border": "yellow 1px solid" },
    firstTime: firstTime,
    isXL: isXL,
    isLG: isLG,
    isMD: isMD,
    isSM: isSM,
    isXS: isXS,
    stringsPhotos: stringsPhotos,
    eCommImages: eCommImages,
    osirisImages: osirisImages,
    quickstarterPhotos: quickstarterPhotos,
    selection: selection,
    projectsList: projectsList,
    setSelection: setSelection,
    setFirstTime: setFirstTime,
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)




