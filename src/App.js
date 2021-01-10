import React from 'react';
import logo from './star-wars.png';
import './App.css';
import Persons from './Persons';
import Planets from './Planets';
import Starships from './Starships';
import Movies from './Movies';
import Dummy from './Dummy';
import TestKey from './Testkey';
import LoginForm from './LoginForm';

class App extends React.Component {

  constructor(props)  {
    super(props);

    this.state = {
      personsData: [],
    }
    this.getData = this.getData.bind(this);
    
  }


  getData(childData) {
    this.setState({personsData: childData});
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
            </a>
          </header>
          <main>
            <Persons getDataFromPersons = {this.getData}/>
            
          <h2>Our Heroes Planets</h2>
            <Planets homes= {this.state.personsData}/>

          <h2>Star Wars Starships</h2>
            <Starships/>

          <h2>Star Wars Movies</h2>
            <Movies/>
            <Dummy label={"submit"} color={"red"}/>
            <Dummy label={"Go there"} color={"white"}/>

            <LoginForm/>
                 
        </main>

        </div>
    );
  }
}

export default App;
      
