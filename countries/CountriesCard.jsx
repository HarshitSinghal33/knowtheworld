import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./App.css"
import { useSelector } from "react-redux";
export const CountriesCard = ({ data }) => {
    const {theme} = useSelector((state) => state.searchData)
    return (
        <motion.main
        transition={{ duration: 0.3 }}
        exit={{opacity : 0}}>
        <div className="countriesBox">
            {data.map((country, i) => {
                return (
                    <Link to={`/country/${country.cca2}`} key={i}>
                        <div className={`Cards ${theme}`}>
                            <img src={country.flags.png} alt="" />
                            {window.innerWidth <=500 
                            ?  <div className="name">{country.name.common.length <= 9 ? `${country.name.common}` : `${country.name.common.slice(0, 9)}...`}</div>
                            :<div className="name">{country.name.common.length <= 18 ? `${country.name.common}` : `${country.name.common.slice(0, 18)}...`}</div>
                            }
                        </div>
                    </Link>
                )
            })}
        </div>
        </motion.main>
    )
}