import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',    initialState: {
        value: []
    },
    reducers:{
        addGoal: (state, action) => {
        console.log(action.payload);
        state.value.push(action.payload);
        fetch("https://localhost:3001/goals/addGoals",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"k3zh^^(s.d;HyURN" //modificar la apikey al correr el backend
        },
        body:JSON.stringify(action.payload)
        }).catch((err)=>{
        console.log(err)
        })},
        initAddTodo: (state,action) =>{
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((goal) => goal.id !== action.payload);
            fetch("localhost:3001/goals/removeGoal"+action.payload,{
            method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"k3zh^^(s.d;HyURN" //modificar la apikey al correr el backend
        },
        body:JSON.stringify(action.payload)
        }).catch((err)=>{
            console.log(err)
        })
        },
    
    }
})

export const {addGoal, removeGoal, initAddTodo} = goalsSlice.actions;

export default goalsSlice.reducer;