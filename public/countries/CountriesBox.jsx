import { getData } from "../ContextandApi/api"
import { useEffect, useState } from 'react';
import { CountriesCard } from './CountriesCard';
import { Pagination } from "../pagination/pagination.jsx";
import { useSelector } from "react-redux";
import { Loader } from "./loader";
export const CountriesBox = () => {
    const {searched,continented} = useSelector((state) => state.searchData);
    const [data, setData] = useState([])
    const [filterData, setfilterData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 15
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData().then(res => {
            setData(res.data)
            setLoading(false)
        })

    }, [])

    useEffect(() => {
        let newData = [];
        data.sort((a,b)=> {
            if(a.name.common < b.name.common) return -1;
            if(a.name.common > b.name.common) return 1;
            return 0
        })
        let trimedSearch = searched.replace(/\s+/g, ' ').trim().toLowerCase()
        if (continented === 'All' && trimedSearch === '') {
            setfilterData(data);
        } else {
            newData = data.filter(country => {
                
                if (continented !== 'All' && !country.continents.includes(continented)) {
                    return false;
                }
                if (trimedSearch !== '' && !country.name.common.toLowerCase().includes(trimedSearch.toLowerCase())) {
                    
                    return false;
                }
                return true;
                
            });
            setfilterData(newData);
        }
    }, [continented, searched, data])

    let lastCard = currentPage * 15;
    let firstCard = lastCard - 15;
    let currentPostData = filterData.slice(firstCard, lastCard)
    return (
        <>
            {loading ? <Loader/>
                : <>
                    <CountriesCard data={currentPostData} />
                    <Pagination
                        totalPost={filterData.length}
                        postPerPage={postPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </>}
        </>
    )
}