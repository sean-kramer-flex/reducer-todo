import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div className='list-container'>
      <h3>Things to do:</h3>
      <ul>
        {props.todos.map((todo) => 
 <li>
 <TodoItem todo={todo}/>
 </li>
        )}
       
        
      </ul>
    </div>
  )
}

export default TodoList;