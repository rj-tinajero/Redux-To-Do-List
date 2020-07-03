import {createStore} from 'redux'

// action creator functions 
export function addTodo(item) {
   return {
      type: "ADD_TO_LIST",
      payload: item
   }
}
export function changeTodoStatus(item) {
   return {
      type: "STATUS_CHANGE",
      payload: item
   }
}
export function deleteFromList(item) {
   return {
      type: "DELETE",
      payload: item
   }
}


const initialState = {
   todos: [
      {
         task: "Clean for 10 minutes",
         complete: false
      },
      {
         task: "Get Lauren Bday gift",
         complete: false
      }, 
   ]
}

function reducer(state = initialState, action) {
   //eventually need switch statements for various action types
   // cases "ADD_TO_LIST" "STATUS_CHANGE" "DELETE"
   switch(action.type) {
      case "ADD_TO_LIST":
         return {
            ...state,
             todos: [
                ...state.todos,
               {
                  task: action.payload,
                  complete: false
               }
         ]}
      default:
         return state
   }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState(), "store subscribe"))
export default store