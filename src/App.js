import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addTodo, changeTodoStatus, deleteFromList} from './redux'
import './App.css';

function App(props){
  const [text, setText] = useState("")
  const [filter, setFilter] = useState("ALL")

  console.log(props.todos, "ehhhhhh")

  const viewAll = (e) => {
    e.preventDefault()
    setFilter("ALL")
  }

  const viewActive = (e) => {
    e.preventDefault()
    setFilter("ACTIVE")
  }

  const viewComplete = (e) => {
    e.preventDefault()
    setFilter("COMPLETE")
  }

  const handleSubmit = (e) => {
    setText(e.target.value)
    console.log(text, "<<<<<<<<<")
  }

  const submit = (e) => {
    e.preventDefault()
    props.addTodo(text)
    setText("")
  }

  return(
    <div className="App-header">
      <h1>Redux To-Do List</h1>
      <ul>
        {props.todos.length < 1 ? <div><p>Add some tasks below!! :D</p></div> : 
          props.todos.map((item, index) => 
            {
              switch(filter) {
                case "ALL": return (
                  <div key={index}>
                    {item.complete ? 
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-check-square status-icon"></i> : 
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-square status-icon"></i>}
                    <li>{item.task}</li>
                    <i 
                      onClick={() => props.deleteFromList(item)} 
                      className="delete far fa-times-circle" 
                    
                    ></i>
                  </div> )
                case "ACTIVE": return (
                  !item.complete ? 
                    <div key={index}>
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-square status-icon"></i>
                      <li>{item.task}</li>
                      <i 
                        onClick={() => props.deleteFromList(item)} 
                        className="delete far fa-times-circle" 
                      
                      ></i>
                    </div> : null )
                case "COMPLETE": return (
                  item.complete ?
                    <div key={index}>
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-check-square status-icon"></i> 
                      <li>{item.task}</li>
                      <i 
                        onClick={() => props.deleteFromList(item)} 
                        className="delete far fa-times-circle" 
                      
                      ></i>
                    </div> : null )
              }
            }
        )}
      </ul>
      
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter task here" onChange={handleSubmit} value={text} />
        <button type="submit">Add Task</button>
      </form>
      

      <footer className="">
        <p onClick={viewAll}>All</p>
        <p onClick={viewActive}>Active</p>
        <p onClick={viewComplete}>Completed</p>
      </footer>

    </div>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = { addTodo, changeTodoStatus, deleteFromList }


export default connect(mapStateToProps, mapDispatchToProps)(App);
