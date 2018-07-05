export function getToDoList() {
  return {
    type: "GET_TODO_LIST"
  };
}

export function addItemToDoList(item) {
  const addItem = { name: item, id: Math.floor(Math.random() * 101) };
  return {
    type: "ADD_ITEM_TO_LIST",
    payload: addItem
  };
}
