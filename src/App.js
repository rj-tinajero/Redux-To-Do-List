import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state = {
    todos : ["this is what I need to do!"],
  }
  
  render() {
    return(
      <div className="App-header">
        <h1>Redux To-Do List</h1>
        <ul>
        {this.state.todos.map((item, index) => 
          <li key={index}>{item}</li>
        )}
        </ul>
        
        <form>
          <p>Enter Todo item:</p>
          <input type="text" placeholder="Type here"/>
          <input type="submit"/> 
        </form>
      </div>
    )
  }

}

export default App;
