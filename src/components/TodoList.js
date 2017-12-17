import React, { Component } from 'react';
import NewTodoItem from './NewTodoItem';
import TodoItem from './TodoItem';
import moment from 'moment';

var allItems = []
allItems.push({ id: 1, content: "Buy ingredients for Crock Pot", dueDate: moment().valueOf(), isDone: false });
allItems.push({ id: 2, content: "Pick up chair at IKEA", dueDate: moment().valueOf(), isDone: false });
allItems.push({ id: 3, content: "Go see mom", dueDate: moment().valueOf(), isDone: false });


export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: allItems
    }

    this.addEvent = this.addEvent.bind(this);
    this.markDoneEvent = this.markDoneEvent.bind(this);
  }

  async addEvent(todoItem) {
    const items = this.state.items;
    todoItem.id = this.state.items.length + 1;
    todoItem.isDone = false;
    items.push(todoItem);
    this.setState({ items });
  }

  markDoneEvent(id) {
    const items = this.state.items;
    const item = items.find(i => i.id == id);
    item.isDone = true;
    this.setState({
      items
    });
  }

  render() {
    var items = this.state.items.map((item, i) => {
      return <TodoItem item={item} key={i} markDoneEvent={this.markDoneEvent} />;
    })

    return (
      <div className='ui one column centered grid'>
        <div className='column'>
          {items}
          <NewTodoItem addEvent={this.addEvent} />
        </div>
      </div>
    );
  }
}
