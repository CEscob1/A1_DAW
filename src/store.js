import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlices";
import optionReducer from "./Reducers/optionSlice";

export default configureStore({
    reducer:{
        goals:goalReducer,
        option:optionReducer
    }
})