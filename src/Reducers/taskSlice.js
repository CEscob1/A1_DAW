import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: []
  },
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
      fetch("https://localhost:3000/tasks/addTasks",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"k3zh^^(s.d;HyURN" //modificar la apikey al correr el backend
        },
        body:JSON.stringify(action.payload)
      }).catch((err)=>{
        console.log(err)
      })
    },
    initAddTodo: (state,action) =>{
        console.log(action.payload);
        state.value.push(action.payload)
    },
    removeTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
      fetch("https://localhost:3000/goals/removeGoal"+action.payload,{
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
  },
});

export const { addTask, removeTask, initAddTodo } = taskSlice.actions;

export default taskSlice.reducer;
