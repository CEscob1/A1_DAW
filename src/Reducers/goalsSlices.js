import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',    initialState: {
        value: [
            {
            'id': 0,     
            'name':'Nombre...',
            'description':'Descripcion...',
            'dueDate':'Fecha...'
            }
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((goal) => goal.id !== action.payload);
          },
    
    }
})

export const {addGoal, removeGoal} = goalsSlice.actions;

export default goalsSlice.reducer;