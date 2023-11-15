import { Routes, Route, useLocation } from 'react-router-dom';
import StringsTheory  from './projects/StringsTheory.jsx';
import Quickstarter from './projects/Quickstarter.jsx';
import Osiris from './projects/Osiris.jsx';
import Ecommerce from './projects/Ecommerce.jsx';
import SalesProbabilities from './projects/SalesProbabilities.jsx';
import Home from './Home.jsx'
import { AnimatePresence } from "framer-motion"


export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  )
}