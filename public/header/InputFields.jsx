import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react'
import { InputData } from '../ContextandApi/InputData'
import "./header.css"
export const InputField = () => {
    const { setContinents } = useContext(InputData);
    const { setSearch } = useContext(InputData)
    const { search } = useContext(InputData)
    return (
        <div className='inputs' style={{ display: "flex" }}>
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setSearch(e.target.value)} value={search} className='input'/>
            <FormControl style={{ minWidth: 60,width: 90, maxWidth:120 }} >
                <InputLabel id="demo-simple-select-label"className='input'>Continents</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="All"
                    label="Continents"
                    onChange={(e) => setContinents(e.target.value)}
                >
                    <MenuItem className='selectOptionItem' value={"All"} >All</MenuItem>
                    <MenuItem className='selectOptionItem' value={"Asia"}>Asia</MenuItem>
                    <MenuItem className='selectOptionItem' value={"Africa"}>Africa</MenuItem>
                    <MenuItem className='selectOptionItem' value={"North America"}>North America</MenuItem>
                    <MenuItem className='selectOptionItem' value={"South America"}>South America</MenuItem>
                    <MenuItem className='selectOptionItem' value={"Oceania"}>Australia</MenuItem>
                    <MenuItem className='selectOptionItem' value={"Europe"}>Europe</MenuItem>
                    <MenuItem className='selectOptionItem' value={"Antarctica"}>Antarctica</MenuItem>
                </Select>
            </FormControl>
        </div>
    )

}