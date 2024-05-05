import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlices";
import taskReducer from "./Reducers/taskSlice";
export default configureStore({
    reducer:{
        goals:goalReducer,
        tasks:taskReducer
        
    }
})