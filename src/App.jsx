import React from 'react'
import "./App.css"

export default class app extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: ["ready", "set", "go"],
      text: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text]
    })
  }

  handleInput(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={this.onSubmit}>
        <input
        type = "text"
        name = "text"
        id = "text"
        value = {this.state.text}
        onChange={this.handleInput}
        />
        <button type = "submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={item + index} >{item}</li>
          })}
        </ul>
      </div>
    );
  }
}