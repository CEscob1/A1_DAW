import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
            {
            'name':'Graduarme de TDS',
            'description':'Ganar todos los cursos',
            'dueDate':'20-05-2025'    
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