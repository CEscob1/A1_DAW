import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',    initialState: {
        value: [
            {
            'type':'GOAL',    
            'name':'Nombre...',
            'description':'Descripcion...',
            'dueDate':'Fecha...'
            }
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addGoal} = goalsSlice.actions;

export default goalsSlice.reducer;