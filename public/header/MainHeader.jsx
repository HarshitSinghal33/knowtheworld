import { DarkMode } from "./DarkMode"
import { InputField } from "./InputFields"
import "./header.css"
import { useLocation, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react"
export const Header = () => {
    const {theme} = useSelector((state) => state.searchData)
    const location = useLocation()
    const [mediaQuery,setmediaQuery] = useState(window.innerWidth >= 750)

    useEffect(()=>{
        const changeQuery = () => {
            setmediaQuery(window.innerWidth > 750)
        }
        window.addEventListener("resize", changeQuery)

        return() => {
            window.removeEventListener("resize", changeQuery)
        }
    },[])
    return (
        <header className={theme}>

            {location.pathname === "/knowtheworld/"
                ? <>
                    <div className="logo">
                        <div style={{ display: "flex" }}>
                            <img src="./img/world.png" alt="" width={45} />
                            {mediaQuery ? <span>KnowTheWorld</span> : null}
                        </div>
                    </div>
                    <InputField />
                </>
                : <>
                    <Link to="/knowtheworld/">
                        <ArrowBackIcon className="icon" sx={{ fontSize: "30px" }} />
                    </Link>
                </>

            }
            <DarkMode />
        </header>
    )
}
