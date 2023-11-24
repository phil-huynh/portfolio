import images from "./images.js"

import osirisCardImage from "./assets/osiris/osirisCardImage.png"
import ecomCardImage from "./assets/e_commerce/ecomCardImage.png"

import { useState, useContext, createContext } from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [firstTime, setFirstTime] = useState(true)
  const [selection, setSelection] = useState('skills')
  const [photoModal, setPhotoModal] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState({image: "", aspect: "", width: ""})


  const selectPhoto = (photo) => {
    console.log(photo)
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


  const { stringsPhotos, quickstarterPhotos, salesPhotos, eCommImages, osirisImages } = images


  const projectsList = [
    {
      name: "Strings Theory",
      image: stringsPhotos.twoChordsMapScales.image,
      aspect: "1.69",
      path: "strings-theory"
    },
    {
      name: "Quickstarter",
      image: quickstarterPhotos.enterQueues.image,
      aspect: "1.56",
      path: "quickstarter"
    },
    {
      name: "Sales Probabilities",
      image: salesPhotos.salesCard.image,
      aspect: "1.57",
      path: "sales-probabilities"
    },
    {
      name: "Osiris",
      image: osirisCardImage,
      aspect: "1.63",
      path: "osiris"
    },
    {
      name: "ecomm",
      image: ecomCardImage,
      aspect: "1.68",
      path: "ecommerce"
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
    setPhotoModal: setPhotoModal,
    setSelection: setSelection,
    setFirstTime: setFirstTime,
    selectPhoto: selectPhoto,
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)




