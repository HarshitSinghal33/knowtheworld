import { useEffect, useState } from "react";
import './pagination.css'
import { useSelector } from "react-redux";
export const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    const { theme } = useSelector((state) => state.searchData)

    // these are the first and last number of pagination button
    const [firstIndex, setFirstIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(3)
    let arr = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        arr.push(i);
    }

    function goFarBehind() {
        setFirstIndex(prev => {
            let newFirstIndex = ((prev - 3) <= 0) ? (0) : (prev - 3);
            return newFirstIndex
        })
        setCurrentPage(firstIndex => {
            const newFirstIndex = ((firstIndex - 3) <= 0) ? 0 : firstIndex - 3 
            return newFirstIndex
        })
        setLastIndex(firstIndex)
    }

    function goFarForward() {
        setFirstIndex(lastIndex)
        setCurrentPage(lastIndex + 1)
        setLastIndex(prev => {
            let newLastIndex = ((prev + 3) >= arr.length) ? (arr.length) : (prev + 3);
            return newLastIndex
        })
    }

    function goBehind() {
        setCurrentPage(prev => {
            const newCurrentPage = prev - 1
            return newCurrentPage;
        })
        if (currentPage - 1 === firstIndex) {
            setFirstIndex(prev => {
                let newFirstIndex = ((prev - 3) <= 0) ? (0) : (prev - 3);
                return newFirstIndex
            })
            setLastIndex(firstIndex)
        }
    }
    function goforward() {
        setCurrentPage(prev => {
            const newCurrentPage = prev + 1
            return newCurrentPage;
        })
        if (currentPage + 1 > lastIndex) {
            setFirstIndex(lastIndex)
            setLastIndex(prev => {
                let newLastIndex = ((prev + 3) >= arr.length) ? (arr.length) : (prev + 3);
                return newLastIndex
            })
        }
    }

    const newArr = arr.slice(firstIndex, lastIndex)
    return (
        <div className={`pagination ${theme}`}>
            {currentPage != 1 ?
                <button onClick={() => { goBehind() }}>Prev</button> : null}

            {firstIndex !== 0 ?
                <button onClick={() => { goFarBehind() }}>...</button> : null}

            {newArr.map((page, i) => {
                return (
                    <div key={i}>
                        <button className={page === currentPage ? "active" : ""} onClick={() => setCurrentPage(page)}>{page}</button>
                    </div>
                )
            })}


            {lastIndex !== arr.length && arr.length >= 3
                ? <button
                    onClick={() => { goFarForward() }}>...</button>
                : null
            }
            {currentPage !== arr.length && arr.length !== 0 ?
                <button onClick={() => { goforward() }}>Next</button>
                : null}

            {arr.length === 0 && <div style={{ color: theme === "light" ? "black" : "white" }}>🤔  No Country Found</div>}

        </div>
    )
}