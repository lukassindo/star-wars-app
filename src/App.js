import React from 'react';
import logo from './star-wars.png';
import './App.css';
import Persons from './Persons';
import Planets from './Planets';
import Starships from './Starships';
import Movies from './Movies';
import Dummy from './Dummy';
import TestKey from './Testkey';


class App extends React.Component {

  constructor()  {
    super();

    this.state = {
      data:'abc',
    
    }
    

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
            </a>
          </header>
          <main>
            <Persons/>
            
          <h2>Some of the Star Wars planets</h2>
            <Planets/>

          <h2>Star Wars Starships</h2>
            <Starships/>

          <h2>Star Wars Movies</h2>
            <Movies/>
            <Dummy label={"submit"} color={"red"}/>
            <Dummy label={"Go there"} color={"white"}/>

            <TestKey/>
       
            
          
        </main>


        </div>
    );
  }
}

export default App;
      
