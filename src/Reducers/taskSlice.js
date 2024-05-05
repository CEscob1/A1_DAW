import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'tasks',    initialState: {
        value: [
            {
            'type':'TASK', 
            'name':'Nombre...',
            'description':'Descripcion...',
            'dueDate':'Fecha...'    
            }
        ]
    },
    reducers:{
        addTask: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;