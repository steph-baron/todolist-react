import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''}
  }


  handleItem = (event)=> {
    event.preventDefault()
    this.setState({items: [this.state.text, ...this.state.items]})
    //handling the submit of the form
  }

  handleChange = (event)=> {
    this.setState({ text: event.target.value })
    // listening for change in input box
  }
  render() {
    return (
      <div>
      <ToDoList items={this.state.items}/>
      <form onSubmit={this.handleItem}>
        <input value={this.state.text} onChange={this.handleChange} className='todo' type="text"/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
}

export default App;
