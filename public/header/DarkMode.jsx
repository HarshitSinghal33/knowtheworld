import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slice";
export const DarkMode = () => {
    const dispatch = useDispatch()
    const {theme} = useSelector((state) => state.searchData)
    const changeBody = () => {
        if(theme === "dark"){
            document.body.style.backgroundColor = "white"
        }else if(theme === "light"){
            document.body.style.backgroundColor = "black"
        }
    }
    return(
        <div className="ModeBtn" onClick={()=>{
            dispatch(setTheme(theme === "light" ? "dark" : "light"))
            changeBody()
        }}>{theme === "light" ? <BrightnessHighIcon className="icon" sx={{ fontSize: "30px" }} /> : <Brightness4Icon className="icon" sx={{ fontSize: "30px" }}/>}</div>
    )
}