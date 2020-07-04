import {createStore} from 'redux'

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

const initialState = {
   todos: [
      {
         task: "Clean for 10 minutes",
         complete: false
      },
      {
         task: "plan the special day",
         complete: false
      }, 
   ]
}

function reducer(state = initialState, action) {
   switch(action.type) {
      case "ADD_TASK":
         return {
            ...state,
             todos: [
                ...state.todos,
               {
                  task: action.payload,
                  complete: false
               }
         ]}
      case "DELETE":
         return {
            ...state,
            todos: [ 
               ...state.todos.filter(obj => obj !== action.payload)
            ]
         }
         // Still working on this
      // case "COMPLETE":
      //    let arr = [...state.todos]
      //    let newArr = arr.find(obj => obj === action.payload).complete = true
      //    console.log(newArr, "NEW ARR")
      //    return {
      //       ...state,
      //       todos: [
      //          ...state.todos,
      //          state.todos.find(obj => obj === action.payload).complete = true,
      //       ]
      //    }
      default:
         return state
   }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState(), "store subscribe"))
export default store