export const initialState = {
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

export default function reducer(state = initialState, action) {
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