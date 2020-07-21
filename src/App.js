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
        <div className="container">
        {props.todos.length < 1 ? <div><p>Add some tasks below!! :D</p></div> : 
          props.todos.map((item, index) => 
            {
              switch(filter) {
                case "ALL": return (
                  <li className="row" key={index}>
                    <div className="col d-flex justify-content-end">
                      {item.complete ? 
                        <i 
                          onClick={() => props.changeTodoStatus(item)} 
                          className="far fa-check-circle status-icon-done"></i> : 
                        <i 
                          onClick={() => props.changeTodoStatus(item)} 
                          className="far fa-circle status-icon"></i>}
                    </div>

                    <div className="col-7">
                      {item.complete ? <p className="done-task">{item.task}</p> : <p>{item.task}</p>}
                    </div>
                    
                    <div className="col">
                      <i 
                        onClick={() => props.deleteFromList(item)} 
                        className="delete far fa-trash-alt" 
                      
                      ></i>
                    </div>
                    
                  </li> )
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
                      <i onClick={() => props.changeTodoStatus(item)} className="far fa-check-circle status-icon-done"></i> 
                      <li>{item.task}</li>
                      <i 
                        onClick={() => props.deleteFromList(item)} 
                        className="delete far fa-trash-alt" 
                      
                      ></i>
                    </div> : null )
              }
            }
        )}
        {/* have another li element be the disappearing input box, depending on plus button being pressed */}
          <li className="row hover-and-input" key={props.todos.length + 2}>
            <div className="col d-flex justify-content-end">
              <i className="far fa-circle status-icon"></i>
            </div>
            <div className="col-7">
              <form onSubmit={submit}>
                <input className="input" type="text" placeholder="Enter task" onChange={handleSubmit} value={text} />
                <button className="submit" type="submit"><i className="fas fa-file-medical"></i></button>
              </form>
            </div>
            <div className="col"></div>
          </li>
        </div>
        
      </ul>
      
      {/* <form onSubmit={submit}>
        <input className="input" type="text" placeholder="Enter task" onChange={handleSubmit} value={text} />
        <button type="submit"><i className="fas fa-file-medical"></i></button>
      </form> */}
      
{/* maybe use filter state as a way to check which color the filter tabs should be */}
      <div className="container fixed-bottom footer">
        <div className="row">
          <div className="col text-center my-auto">
            <p className="filter-title" onClick={viewAll}>All</p>
          </div>
          <div className="col text-center my-auto">
            <p className="filter-title" onClick={viewActive}>Active</p>  
          </div>
          <div className="col text-center my-auto">
            <p className="filter-title" onClick={viewComplete}>Completed</p>
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
