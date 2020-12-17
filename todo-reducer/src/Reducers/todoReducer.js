import { ADD_TODO } from './../Actions/todoActions';

const todoReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO :
      console.log('add todo case in todoReducer', action.payload);
   return [...state,
  action.payload]
      
  }
}

export default todoReducer;