import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/people');
    const body = await response.json();
    this.setState({ people: body, isLoading: false });
  }

  render() {
    const {people, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>JUG List</h2>
            {people.map(people =>
              <div key={people.id}>
                {people.name}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
