import React, { Component } from 'react';
import moment from 'moment';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.checkDoneClick = this.checkDoneClick.bind(this);
  }

  checkDoneClick() {
    this.props.markDoneEvent(this.props.item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {item.content}
          </div>
          <div className='meta'>
            {moment(item.dueDate).fromNow()}
          </div>
          <div className='extra content'>
            {!item.isDone ? <span
              className='right floated edit icon'
              onClick={this.checkDoneClick}
              style={{ cursor: 'pointer' }}
            >
              <i className='check icon' />
              Mark done
            </span>
              : <span
                className='right floated edit icon'
              >
                <i className='check icon' />
                Done
            </span>}
          </div>
        </div>
      </div >
    )
  }
}

export default TodoItem
