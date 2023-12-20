import images from "./images.js"

import osirisCardImage from "./assets/osiris/osirisCardImage.png"
import ecomCardImage from "./assets/e_commerce/ecomCardImage.png"

import { useState, useContext, createContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [firstTime, setFirstTime] = useState(true)
  const [selection, setSelection] = useState('projects')
  const [photoModal, setPhotoModal] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState({image: "", aspect: "", width: ""})
  const [resumeModal, setResumeModal] = useState(false)
  const [enterMicrosModal, setEnterMicrosModal] = useState(false)


  const selectPhoto = (photo) => {
    setCurrentPhoto({
      image: photo.image,
      aspect: photo.aspect,
      width: photo.width
    })
    setPhotoModal(true)
  }

  const theme = useTheme()
  const isXL = useMediaQuery(theme.breakpoints.up('xl'))
  const isLG = useMediaQuery(theme.breakpoints.up('lg'))
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  const isSM = useMediaQuery(theme.breakpoints.up('sm'))
  const isXS = useMediaQuery(theme.breakpoints.up('xs'))


  const getSize = () => {
    if (isXL) { return "is XL" }
    if (isLG) { return "is LG" }
    if (isMD) { return "is MD" }
    if (isSM) { return "is SM" }
    if (isXS) { return "is XS" }
  }


  const {
    stringsPhotos,
    quickstarterPhotos,
    salesPhotos,
    eCommImages,
    osirisImages,
    resumeImage
  } = images


  const projectsList = [
    {
      name: "Strings Theory",
      image: stringsPhotos.twoChordsMapScales.image,
      aspect: "1.69",
      path: "strings-theory",
      message: "A tool that maps complex relationships between different scales and chords."
    },
    {
      name: "Quickstarter",
      image: quickstarterPhotos.quickstarterCard.image,
      aspect: quickstarterPhotos.quickstarterCard.aspect,
      path: "quickstarter",
      message: "A tool that automates the creation of large microservices applications with Django."
    },
    {
      name: "Ari Design",
      image: ecomCardImage,
      aspect: "1.68",
      path: "ecommerce",
      message: "A full stack ecommerce platform for clothing and accessories."
    },
    {
      name: "mikeslist",
      image: osirisCardImage,
      aspect: "1.63",
      path: "osiris",
      message: "An application that connects charities with people who want to donate items."
    },
    {
      name: "Sales Probabilities",
      image: salesPhotos.salesCard.image,
      aspect: "1.57",
      path: "sales-probabilities",
      message: "A dashboard for tracking the viability of potential sales."
    },
  ]


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
    salesPhotos: salesPhotos,
    selection: selection,
    projectsList: projectsList,
    photoModal: photoModal,
    currentPhoto: currentPhoto,
    resumeImage: resumeImage,
    resumeModal: resumeModal,
    enterMicrosModal: enterMicrosModal,
    setCurrentPhoto: setCurrentPhoto,
    setPhotoModal: setPhotoModal,
    setSelection: setSelection,
    setFirstTime: setFirstTime,
    selectPhoto: selectPhoto,
    setResumeModal: setResumeModal,
    setEnterMicrosModal: setEnterMicrosModal,
    getSize: getSize,
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)




