import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// import { useTheme } from '@mui/material/styles';
import Home from './Home.jsx'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
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