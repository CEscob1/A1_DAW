import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: [
      {
        id: 0,
        name: "Nombre...",
        description: "Descripcion...",
        dueDate: "Fecha...",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    removeTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
