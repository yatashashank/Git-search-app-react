import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: {}
  }
  getUser = () => {
    const name = this.refs.name.value;
    if (name.length !== 0) {
      fetch(`https://api.github.com/search/users?q=${name}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            user: {
              name: data.items[0].login,
              avatar: data.items[0].avatar_url,
              view: data.items[0].html_url,
              serial: data.items[0].id,
              score: data.items[0].score
            }

          }
          )
        })
        .catch((error) => { console.log(error) })
    }
  }
  render() {


    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
          <a className="navbar-brand" href="#">Github search</a>
        </nav>

        <main role="main" className="container">

          <div className="searchContainer">
            <h1>Search User</h1>
            <p className="lead">Enter user name</p>
            <input type="text" id="searchUser" className="form-control" placeholder="Search......" ref="name" onKeyUp={this.getUser} />
          </div>
          <br></br>
          <div id="profile">
            <User user={this.state.user} />
          </div>
        </main>

      </div>

    );
  }
}

export default App;
