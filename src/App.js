import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addTodo, changeTodoStatus, deleteFromList} from './redux/actions'
import './App.css';
import plus from './assets/Ellipse 1.svg'

function App(props){
  const [text, setText] = useState("")
  const [filter, setFilter] = useState("ALL")

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
  }

  const submit = (e) => {
    e.preventDefault()
    props.addTodo(text)
    setText("")
  }

  return(
    <div className="App-header">
      <h1 className="title">Tasks</h1>
      <ul>
        {props.todos.length < 1 ? <div><p>Add some tasks below!! :D</p></div> : 
          props.todos.map((item, index) => 
            {
              switch(filter) {
                case "ALL": return (
                  <div key={index}>
                    {item.complete ? 
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-check-circle status-icon"></i> : 
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-circle status-icon"></i>}
                    <li>{item.task}</li>
                    <i 
                      onClick={() => props.deleteFromList(item)} 
                      className="delete far fa-trash-alt" 
                    
                    ></i>
                  </div> )
                case "ACTIVE": return (
                  !item.complete ? 
                    <div key={index}>
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-circle status-icon"></i>
                      <li>{item.task}</li>
                      <i 
                        onClick={() => props.deleteFromList(item)} 
                        className="delete far fa-trash-alt" 
                      
                      ></i>
                    </div> : null )
                case "COMPLETE": return (
                  item.complete ?
                    <div key={index}>
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-check-circle status-icon"></i> 
                      <li>{item.task}</li>
                      <i 
                        onClick={() => props.deleteFromList(item)} 
                        className="delete far fa-trash-alt" 
                      
                      ></i>
                    </div> : null )
              }
            }
        )}
      </ul>
      
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter task here" onChange={handleSubmit} value={text} />
        <button type="submit"><i class="fas fa-file-medical"></i></button>
      </form>
      
{/* maybe use filter state as a way to check which color the filter tabs should be */}
      <div className="container fixed-bottom">
        <div className="row">
          <div className="col text-center my-auto">
            <p onClick={viewAll}>All</p>
          </div>
          <div className="col text-center my-auto">
            <p onClick={viewActive}>Active</p>  
          </div>
          <div className="col text-center my-auto">
            <p onClick={viewComplete}>Completed</p>
          </div>
          <div className="col text-center">
            <img src={plus} />
          </div>
        </div>
        
      </div>

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
