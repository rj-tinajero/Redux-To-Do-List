import {createStore} from 'redux'

// need action creator functions addToList() changeItemStatus() deleteFromList() 

const initialState = {
   todos: [
      // {
      //    item: "",
      //    status: "IN_PROGRESS"
      // },
      // {
      //    item: "",
      //    status: "COMPLETE"
      // }, ...
   ]
}

function reducer(state = initialState, action) {
   //eventually need switch statements for various action types
   // cases "ADD_TO_LIST" "COMPLETED" "DELETE_FROM_LIST"
   return state
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store