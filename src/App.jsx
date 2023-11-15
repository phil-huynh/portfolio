import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// import { useTheme } from '@mui/material/styles';


export default function App() {


  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  )
}



// const theme = useTheme();

// const matches = useMediaQuery(theme.breakpoints.up('lg'));
// const [sidebar, setSidebar] = useState(false)


// const handleSideBar = () => setSidebar(!sidebar)

// useEffect(() => {
//   matches && setSidebar(false)
// }, [matches])