import React from 'react';

class AddTodo extends React.Component {
constructor(props) {
  super(props)
  this.state={item: ''}
}


onChangeHandler = (e) => {
  console.log('change handler: ', e.target.value);
  this.setState({item: e.target.value})
}

onSubmitHandler = (e) => {
  e.preventDefault();
  this.props.addItem(this.state.item);
  this.setState({item: ''})
}

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input className='input' type='text' value={this.state.item} onChange={this.onChangeHandler}></input>
        <br />
        <br />
        <button className='add-button'>Add a todo item</button>
      </form>
    )
  }
}

export default AddTodo;