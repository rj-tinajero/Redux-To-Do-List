import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addTodo, changeTodoStatus, deleteFromList} from './redux/actions'
import './App.css';
import plus from './assets/Ellipse 1.svg'
import disabled from './assets/Ellipse 2.svg'
import Todo from './components/Todo'

function App(props){
  const [text, setText] = useState("")
  const [filter, setFilter] = useState("ALL")
  const [toggleInput, setToggleInput] = useState(false)

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
    setToggleInput(false)
  }

  const styleAll = () => {
    if(filter === "ALL") {
      return <p className="filter-title-clicked" onClick={viewAll}>All</p>  
    } else {
      return <p className="filter-title" onClick={viewAll}>All</p>  
    }
  }

  const styleAct = () => {
    if(filter === "ACTIVE") {
      return <p className="filter-title-clicked" onClick={viewActive}>Active</p>  
    } else {
      return <p className="filter-title" onClick={viewActive}>Active</p>  
    }
  }

  const styleComplete = () => {
    if(filter === "COMPLETE") {
      return <p className="filter-title-clicked" onClick={viewComplete}>Completed</p>  
    } else {
      return <p className="filter-title" onClick={viewComplete}>Completed</p>  
    }
  }

  return(
    <div className="App-header">
      <h1 className="title">Tasks</h1>
      <ul>
        <div className="container list">
        {props.todos.length < 1 ? <div><p>Add some tasks below!! :D</p></div> : 
          props.todos.map((item, index) => 
            {
              switch(filter) {
                case "ALL": return (
                  <Todo item={item} index={index}/>
                )
                case "ACTIVE": return (
                  !item.complete ? <Todo item={item} index={index}/> : null 
                )
                case "COMPLETE": return (
                  item.complete ? <Todo item={item} index={index}/> : null 
                )
                default:
                  return null
              }
            }
        )}
        {/* have another li element be the disappearing input box, depending on plus button being pressed */}
        {toggleInput ? 
          <li className="row hover-and-input" key={props.todos.length + 2}>
            <div className="col my-auto text-center">
              <i className="far fa-circle status-icon"></i>
            </div>
            <div className="col-9">
              <form onSubmit={submit}>
                <input className="input" type="text" placeholder="Enter task here" onChange={handleSubmit} value={text} />
                <button className="submit" type="submit"><i className="fas fa-file-medical"></i></button>
              </form>
            </div>
            <div className="col"></div>
          </li> : null}
        </div>
        
      </ul>
      
{/* maybe use filter state as a way to check which color the filter tabs should be */}
      <div className="container fixed-bottom footer">
        <div className="row">
          <div className="col text-center my-auto">
            {styleAll()}  
          </div>
          <div className="col text-center my-auto">
            {styleAct()}
          </div>
          <div className="col text-center my-auto">
            {styleComplete()}
          </div>
          <div className="col text-center">
            {filter === "COMPLETE" ?
              <img src={disabled} alt="disabled button"/> :
              <img onClick={() => setToggleInput(!toggleInput)} src={plus} alt="add button"/>}
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
