import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { CountriesBox } from '../countries/CountriesBox'
import { CountryDetail } from '../countries/CountryDetail';
export const AnimateRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/knowtheworld/' element={<CountriesBox />}></Route>
                <Route path='/country/:countrycode' element={<CountryDetail />}></Route>
            </Routes>
        </AnimatePresence>
    )
}
