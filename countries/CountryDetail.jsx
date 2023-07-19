import { useParams } from "react-router-dom"
import { getCountryDetail } from "../ContextandApi/api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { Loader } from "./loader";
import { useSelector } from "react-redux"
import "./App.css"
export const CountryDetail = () => {
    const {theme} = useSelector((state) => state.searchData)
    const [countryData, setCountryData] = useState();
    const { countrycode } = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getCountryDetail(countrycode).then(res => {
            setCountryData(res.data);
            setLoading(false)
        })
    }, [countrycode])

    return (
        <motion.main
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="countryDetailMain"
        >   
            {loading ? <Loader/>
            :<>{countryData?.map((country, i) => {
                
                return (

                    <div className={`countryDetail ${theme}`} key={i}>
                        <div className="countryData" >
                            <div className="image">
                                <img src={country.flags.png} alt="" />
                            </div>

                            <div> <span className="title"> Country Name:</span> {country.name.common}</div>
                            <div> <span className="title"> Population</span>: {country.population}</div>
                            <div>
                                <span className="title"> Capital:</span>
                                <span>
                                    {(country.capital == undefined) ? " Undefined" : ` ${country.capital}`}
                                </span>
                            </div>
                            <div><span className="title"> Continent</span>: {country.continents}</div>
                            <div>
                                <span className="title">Border: </span>{country.borders === undefined ? "undefined" : country.borders.map((brd, i) => {
                                    return <span key={i}>{`${brd} `}</span>
                                })}
                            </div>
                            <div>
                                <span className="title">Languages: </span>
                                <span>
                                    {country.hasOwnProperty("languages") ? (<span>
                                        {Object.keys(country.languages).map(key => (
                                            <span key={key}>{` ${country.languages[key]}`}</span>
                                        ))}
                                    </span>
                                    ) :
                                        (
                                            <span>No languages found for this country.</span>
                                        )}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}</>}
        </motion.main>
    )
}