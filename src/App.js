import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    const statesToUpdate = {};
    statesToUpdate[name] = value;

    this.setState(statesToUpdate);
  };
  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };
  render = () => {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
}

export default App;
