import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: "searchData",
    initialState: {searched: '',continented:'All',theme: "light"},
    reducers:{
        setSearchData: (state,action) =>{
            state.searched = action.payload
        },
        setContinentData: (state,action) =>{
            state.continented = action.payload
        },
        setTheme: (state,action) =>{
            state.theme = action.payload
        },
    }
})
export const {setSearchData,setContinentData,setTheme} = searchSlice.actions
export default searchSlice.reducer