import { configureStore } from '@reduxjs/toolkit';
import  setSearchData from './slice';
import  setContinentData from './slice';
import  setTheme from './slice';
export const store = configureStore({
    reducer:{
        searchData: setSearchData,
        searchData: setContinentData,
        searchData: setTheme
    },
})