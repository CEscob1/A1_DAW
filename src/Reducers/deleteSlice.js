export const removeItem = 'removeItem';

export const deleteItem = (itemId) => ({
  type: removeItem,
  payload: itemId,
});

const initialState = {
  goals: [],
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case removeItem:
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.payload),
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;