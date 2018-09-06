import React, { Component } from 'react';
import User from './User';
import Title from './components/Title'
import Form from './components/Form'
import { DebounceInput } from 'react-debounce-input';
import './App.css';

class App extends Component {

  state = {
    user: []
  }
  getUser = (e) => {
    e.preventDefault();
    let name = e.target.elements.searchUser.value;
    e.target.reset();
    if (name.length !== 0) {
      fetch(`https://api.github.com/search/users?q=${name}&client_id=7affacd2673d47bfdee8&client_secret=5e402d4e3c51b0edaa164b9581f92d7bfe064981`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            user: data.items
          }
          )
        })
        .catch((error) => { console.log(error) })
    }
  }
  render() {

    console.log(this.state.user);
    return (
      <div className="App">
        <Title />
        <main role="main" className="container" style={{ backgroundColor: '#615959' }}>
          <Form getUser={this.getUser} />
          <User user={this.state.user} />
        </main>

      </div>

    );
  }
}
export default App;
