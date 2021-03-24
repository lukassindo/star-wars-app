import React from 'react';
import logo from './star-wars.png';
import './App.css';
import Persons from './Persons';
import {PlanetsTable, StarshipsTable} from './MainTable';

import Movies from './Movies';
import vehicleService from './services/vehicles';
import { ThemeContext, subject } from './contexts';
import {starWars} from './data.js';
import NewsletterForm from './NewsletterForm';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Other from './Other';
import Home from './Home';

class App extends React.Component {

  constructor(props)  {
    super(props);

    this.state = {
      personsData: [],
      vehicles: [],
      titles: [],
      fetched: false,
      theme: subject.light,
      colorChanged: true,
    }
    this.getData = this.getData.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    
  }

  async componentDidMount() {
      const data = await vehicleService.getVehicles();
      this.setState({titles: data[0], vehicles: data[1], fetched: true });

  }


  getData(childData) {
    this.setState({personsData: childData});
  }

  changeBackground() {
    if (this.state.colorChanged) {
      this.setState({theme: subject.dark, colorChanged: false})
    } else 
      { this.setState({theme: subject.light, colorChanged: true});}
  }
 

  render() {
    
    return (
      <ThemeContext.Provider value={this.state.theme}>
       

      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            </a>


        <Router>
          <div>
            <ul className="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/persons">Persons</Link>
              </li>
              <li>
                <Link to="/planets">Planets</Link>
              </li>
              <li>
                <Link to="/starships">Starships</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link to="/other">Other</Link>
              </li>
            </ul>

            <hr />

          
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/persons">
                <Persons getDataFromPersons = {this.getData}/>
              </Route>
              <Route path="/planets">
                <PlanetsTable homes= {this.state.personsData}/>
              </Route>
              <Route path="/starships">
                <StarshipsTable />
              </Route>
              <Route path="/movies">
                <Movies movies={starWars.movies}/>
              </Route>
              <Route path="/newsletter">
                <NewsletterForm />
              </Route>
              <Route path="/other">
                <Other fetched={this.state.fetched} titles={this.state.titles} vehicles={this.state.vehicles} changeBackground = {this.changeBackground}/>
              </Route>
            </Switch>
          </div>
        </Router>
         
          </header>
       

        </div>
        </ThemeContext.Provider>
    );
  }
}

export default App;
      
