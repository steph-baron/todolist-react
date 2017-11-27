import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []}
  }


  handleItem(event){
    var item = event.target.value;
    console.log("This is item: ", item)
    this.setState({items: [event.target.value, ...this.state.items]})
  }
  render() {
    return (
      <div>
      <ToDoList/>
      <form onSubmit={this.handleItem}>
        <input className='todo' type="text"/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
}

export default App;
