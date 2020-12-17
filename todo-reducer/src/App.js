import React, { useState, useReducer } from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import './styles.css';
import todoReducer from './Reducers/todoReducer';
import todoActions from './Actions/todoActions';



const App = () => {
  const initialState = [];

  // const [todos, setTodos] = useState(initialState);

  const [state, dispatch] = useReducer(todoReducer, initialState)
  

const onChangeHanndler = (e) => {
console.log(e.target.value);
}

const addItem = (item) => {
// setTodos([
//   ...todos,
//   {todo: item,
//   id: Date.now(),
// completed: false}
// ])

dispatch(todoActions.addTodo(item))
}

const toggleItem = (itemId) => {
console.log('clicked');
}


  return (
    <>
    <div className='App'>
      <h1>Reducer Todo App</h1>
      <div className='formDiv'>
      <AddTodo addItem={addItem}/>
      </div>
      
      <TodoList todos={state}/>
    </div>
    </>
  )
}

export default App;