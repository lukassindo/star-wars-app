import React from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './Persons';

class App extends React.Component {

  constructor()  {
    super();

    this.state = {data:'abc'}


  }
  componentDidMount() {
    setTimeout(()=> {
      this.setState({data:"dfg"});
    },1000); 
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Star Wars Characters {this.state.data}</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Persons/>
          </a>
        </header>
        </div>
    );
  }
}

export default App;
      
