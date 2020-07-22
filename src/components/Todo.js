import React from 'react';
import {connect} from 'react-redux'
import {addTodo, changeTodoStatus, deleteFromList} from '../redux/actions'

function Todo(props) {
   const item = props.item
   const index = props.index
   return(
      <li className="row" key={index}>
         <div className="col my-auto text-center">
            {item.complete ? 
            <i 
               onClick={() => props.changeTodoStatus(item)} 
               className="far fa-check-circle status-icon-done"></i> : 
            <i 
               onClick={() => props.changeTodoStatus(item)} 
               className="far fa-circle status-icon"></i>}
         </div>

         <div className="col-9 mt-3">
            {item.complete ? <p className="done-task">{item.task}</p> : <p>{item.task}</p>}
         </div>
         
         <div className="col my-auto text-center">
            <i 
            onClick={() => props.deleteFromList(item)} 
            className="delete far fa-trash-alt" 
            
            ></i>
         </div>
         
      </li>)
}

const mapStateToProps = (state /*, ownProps*/) => {
   return {
     todos: state.todos
   }
 }
 const mapDispatchToProps = { addTodo, changeTodoStatus, deleteFromList }
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Todo);
 