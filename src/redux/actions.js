// action creator functions 
export function addTodo(item) {
   return {
      type: "ADD_TASK",
      payload: item
   }
}
export function changeTodoStatus(item) {
   return {
      type: "COMPLETE",
      payload: item
   }
}
export function deleteFromList(item) {
   return {
      type: "DELETE",
      payload: item
   }
}