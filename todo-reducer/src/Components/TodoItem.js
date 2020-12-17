import React from 'react';


class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
<div className='custom-checkbox'>
<input className='label-1' type='checkbox' />
  <label htmlFor='label-1'>
    <h2>{this.props.todo}
    </h2>   
  </label>
</div>
  

    )
  }
}

export default TodoItem;