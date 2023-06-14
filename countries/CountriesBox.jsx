import { getData } from "../ContextandApi/api"
import { useEffect, useState, useContext } from 'react';
import { CountriesCard } from './CountriesCard';
import { InputData } from '../ContextandApi/InputData'
import { Pagination } from "../pagination/pagination.jsx";
import { useLocation } from "react-router-dom"
export const CountriesBox = () => {
    const location = useLocation()
    const { continents } = useContext(InputData)
    const { search } = useContext(InputData)
    const [data, setData] = useState([])
    const [filterData, setfilterData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setpostPerPage] = useState(15)
    useEffect(() => {
        getData().then(res => {
            setData(res.data)
        })
    }, [])

    useEffect(() => {
        let newData = [];
        if (continents === 'All' && search === '') {
            setfilterData(data);
        } else {
            newData = data.filter(country => {
                if (continents !== 'All' && !country.continents.includes(continents)) {
                    return false;
                }
                if (search !== '' && !country.name.common.toLowerCase().includes(search.toLowerCase())) {
                    return false;
                }
                return true;
            });
            setfilterData(newData);
        }
    }, [continents, search, data])

    let lastCard = currentPage * 15;
    let firstCard = lastCard - 15;
    let currentPostData = filterData.slice(firstCard, lastCard)
    return (
        <>
            <CountriesCard data={currentPostData} />
            <Pagination
                totalPost={filterData.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )
}