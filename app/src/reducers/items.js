const initialState = {
  todoList: [{ name: "BUY MILK", id: 1 }, { name: "ADOPT CAT", id: 2 }],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_TODO_LIST":
      return {
        ...state,
      };
    default:
      return state;
  }
}
