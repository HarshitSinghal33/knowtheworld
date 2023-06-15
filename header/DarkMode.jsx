import { InputData } from "../ContextandApi/InputData"
import { useContext } from "react";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness4Icon from '@mui/icons-material/Brightness4';
export const DarkMode = () => {
    const {setMode}= useContext(InputData)
    const {mode}= useContext(InputData)
    const changeBody = () => {
        if(mode === "dark"){
            document.body.style.backgroundColor = "white"
        }else if(mode === "light"){
            document.body.style.backgroundColor = "black"
        }
    }
    return(
        <div className="ModeBtn" onClick={()=>{
            setMode(mode === "light" ? "dark" : "light")
            changeBody()
        }}>{mode === "light" ? <BrightnessHighIcon className="icon" sx={{ fontSize: "30px" }} /> : <Brightness4Icon className="icon" sx={{ fontSize: "30px" }}/>}</div>
    )
}