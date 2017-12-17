import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      date: moment()
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }

  onSubmit(event) {
    event.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.itemName);
    var newItem = { content: input.value, dueDate: this.state.date.valueOf() };
    this.props.addEvent(newItem);
    input.value = '';
  }

  handleDateSelect(date) {
    if (date >= this.state.date) {
      this.setState({
        date: date
      });
    }
  }

  render() {
    return (<div className='ui centered card'>
      <div className='content'>
        <div className='ui form'>
          <div className='field'>
            <label>New todo</label>
            <input ref="itemName" type="text"
              required />
          </div>
          <div className='field'>
            <DatePicker
              startDate={this.state.startDate}
              selected={this.state.date}
              onChange={this.handleDateSelect}
              ref="dueDate"
            />
          </div>
          <div className='ui two bottom attached buttons'>
            <button
              className='ui basic blue button'
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
