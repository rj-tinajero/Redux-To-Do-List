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
      // {
      //    task: "Clean for 10 minutes",
      //    complete: false
      // },
      // {
      //    task: "plan the special day",
      //    complete: false
      // }, 
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
      case "COMPLETE":
         let arr = [...state.todos]
         for(let i = 0; i < arr.length; i++) {
            if(arr[i] === action.payload) {
               arr[i].complete = !arr[i].complete 
               console.log(arr, "Changed?")
               break
            }
         }
         return {
            ...state,
            todos: [...arr]
         }
      default:
         return state
   }
}

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : initialState

const store = createStore(reducer, persistedState)
store.subscribe(() => {
   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store