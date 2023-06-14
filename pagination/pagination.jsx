import { useEffect, useState } from "react";
import { InputData } from "../ContextandApi/InputData"
import { useContext } from 'react'
import './pagination.css'
export const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    const { mode } = useContext(InputData)
    const [firstIndex, setFirstIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(3)
    let arr = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        arr.push(i);
    }

    useEffect(() => {
        if (arr.length < currentPage) {
            setFirstIndex(0)
            setLastIndex(3)
            setCurrentPage(1)
        }
    }, [arr])

    function goBehind() {
        setCurrentPage(prev => prev - 1)
        if (currentPage - 1 === firstIndex) {
            setFirstIndex(
                prev => ((prev - 3) <= 0) ? (prev = 0) : (prev - 3)
            )
            setLastIndex(firstIndex)
        }
    }
    function goforward() {
        setCurrentPage(prev => prev + 1)
        if (currentPage + 1 > lastIndex) {
            setFirstIndex(lastIndex)
            setLastIndex(prev => ((prev + 3) >= arr.length) ? (prev = arr.length) : (prev + 3))
        }
    }

    const newArr = arr.slice(firstIndex, lastIndex)
    return (
        <div className={`pagination ${mode}`}>
            {currentPage != 1 ? <button onClick={() => { goBehind() }}>Prev</button> : null}
            {firstIndex !== 0 ? <button
                onClick={() => {
                    setFirstIndex(prev => ((prev - 3) <= 0) ? (prev = 0) : (prev - 3))
                    setCurrentPage(firstIndex => ((firstIndex - 3) <= 0) ? (firstIndex = 0) : (firstIndex - 3))
                    setLastIndex(firstIndex)
                }}>...</button> : null}
            {newArr.map((page, i) => {
                return (
                    <div key={i}>
                        <button className={page == currentPage ? "active" : ""} onClick={() => setCurrentPage(page)}>{page}</button>
                    </div>
                )
            })}
            {lastIndex !== arr.length && arr.length >= 3 ? <button
                onClick={() => {
                    setFirstIndex(lastIndex)
                    setCurrentPage(lastIndex + 1)
                    setLastIndex(prev => ((prev + 3) >= arr.length) ? (prev = arr.length) : (prev + 3))
                }}>...</button> : null}
            {currentPage !== arr.length && arr.length !== 0 ?
                <button
                    onClick={() => { goforward() }}
                >Next</button>
                : null}
            {arr.length === 0 && <div style={{ color: mode === "light" ? "black" : "white" }}>🤔  No Country Found</div>}
        </div>
    )
}