import axios from "axios";
export const getData = () => {
    return axios.get('https://restcountries.com/v3.1/all')
}

export const getCountryDetail = (countryCode) => {
    return axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
}