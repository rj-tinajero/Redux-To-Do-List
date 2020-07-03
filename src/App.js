import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addTodo, changeTodoStatus, deleteFromList} from './redux'
import './App.css';

function App(props){
  const [text, setText] = useState("")
console.log(props, "PROPS TO YAS")
  const handleChange = (e) => {
    setText(e.target.value)
    console.log(text, "<<<<<<<<<")
  }

  const submit = (text) => {
    props.addTodo(text)
    // setText("")
  }

  return(
    <div className="App-header">
      <h1>Redux To-Do List</h1>
      <ul>
      {props.todos.map((item, index) => 
        <li key={index}>{item.task}</li>
      )}
      </ul>
      
      <p>Enter Todo item:</p>
      <input type="text" placeholder="Type here" onChange={handleChange} />
      <button onClick={() => submit(text)}>Add Task</button>
      {/* button instead */}

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
