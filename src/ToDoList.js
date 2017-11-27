import React from 'react';

const ToDoList = (props) => {
  return (
    <div>
    <h1>Your To-Do List</h1>
    <ul>
      { props.items.map((item, i)=> <li key={i}>{item}</li>)}
    </ul>
    </div>
  )
}





export default ToDoList
