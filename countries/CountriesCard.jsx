import { Link } from "react-router-dom"
import { motion } from "framer-motion"
// import { InputData } from "../Context/InputData"
import "./App.css"
import { InputData } from "../ContextandApi/InputData"
import { useContext } from 'react'
export const CountriesCard = ({ data }) => {
    const { mode } = useContext(InputData)
    return (
        <motion.main
        transition={{ duration: 0.3 }}
        exit={{opacity : 0}}>
        <div className="countriesBox">
            {data.map((country, i) => {
                return (
                    <Link to={`/country/${country.cca2}`} key={i}>
                        <div className={`Cards ${mode}`}>
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