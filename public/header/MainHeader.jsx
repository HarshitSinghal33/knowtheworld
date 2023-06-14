import { DarkMode } from "./DarkMode"
import { InputField } from "./InputFields"
import "./header.css"
import { InputData } from "../ContextandApi/InputData"
import { useContext } from 'react'
import { useLocation, Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const Header = () => {
    const location = useLocation()
    const { mode } = useContext(InputData)
    return (
        <header className={mode}>

            {location.pathname === "/"
                ? <>
                    <div className="logo">
                        <div style={{ display: "flex" }}>
                            <img src="./img/world.png" alt="" width={45} />
                            {window.innerWidth >= 750 ? <span>KnowTheWorld</span> : null  }
                        </div>
                    </div>
                    <InputField />
                </>
                : <Link to="/">
                    <ArrowBackIcon className="icon" sx={{ fontSize: "30px" }}/>
                </Link>
            }
            <DarkMode />
        </header>
    )
}