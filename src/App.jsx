import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import StringsTheory  from './projects/StringsTheory.jsx';
import Quickstarter from './projects/Quickstarter.jsx';
import Osiris from './projects/Osiris.jsx';
import Ecommerce from './projects/Ecommerce.jsx';
import SalesProbabilities from './projects/SalesProbabilities.jsx';
import Home from './Home.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// import { useTheme } from '@mui/material/styles';


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="strings-theory">
          <Route index element={<StringsTheory />}/>
        </Route>
        <Route path="quickstarter">
          <Route index element={<Quickstarter />}/>
        </Route>
        <Route path="osiris">
          <Route index element={<Osiris />}/>
        </Route>
        <Route path="ecommerce">
          <Route index element={<Ecommerce />}/>
        </Route>
        <Route path="sales-probabilities">
          <Route index element={<SalesProbabilities />}/>
        </Route>
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