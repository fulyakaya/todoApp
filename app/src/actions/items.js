export function getToDoList() {
  return {
    type: "GET_TODO_LIST",
  };
}

export function addItemToDoList(item) {
  return {
    type: "addItemToDoList",
    payload: item,
  };
}
