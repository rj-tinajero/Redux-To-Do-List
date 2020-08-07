import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addTodo, changeTodoStatus, deleteFromList} from '../redux/actions'

function Todo(props) {
   const [hover, setHover] = useState(false)
   const item = props.item
   const index = props.index
   return(
      <li 
         className="row" 
         key={index} 
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         <div className="col my-auto  mx-auto">
            {item.complete ? 
            <i 
               onClick={() => props.changeTodoStatus(item)} 
               className="far fa-check-circle fa-sm status-icon-done"></i> : 
            <i 
               onClick={() => props.changeTodoStatus(item)} 
               className="far fa-circle fa-sm status-icon"></i>}
         </div>

         <div className="col-8 mt-3 task mx-auto">
            {item.complete ? <p className="done-task">{item.task}</p> : <p>{item.task}</p>}
         </div>
         
         <div className="col my-auto mx-auto">
            {hover ? 
               <i 
                  onClick={() => props.deleteFromList(item)} 
                  className="delete far fa-trash-alt fa-sm" 
               ></i> : null}
         </div>
         
      </li>
   )
}

const mapStateToProps = (state /*, ownProps*/) => {
   return {
     todos: state.todos
   }
 }
 const mapDispatchToProps = { addTodo, changeTodoStatus, deleteFromList }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Todo);