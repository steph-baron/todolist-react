import React from 'react';

const ToDoList = () => {
  return (
    <ul>
    // generating list items here
      { items.map((item, i)=> <li key={i}>(item)</li>)}
    </ul>
  )
}





export default ToDoList
