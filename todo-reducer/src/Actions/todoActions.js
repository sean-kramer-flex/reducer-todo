export const ADD_TODO = "ADD_TODO";

export default {
  addTodo: (newTodo) => {
    console.log('addTodo action creator');
    return({type: ADD_TODO, payload: newTodo})
  }
}