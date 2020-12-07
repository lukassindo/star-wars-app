import React from 'react';
import {starWars} from './data.js';
import StarWarsTable from './Table';

class Persons extends React.Component {

    constructor() {
        super();
        this.state = {
            persons : ['Han Solo','Chewbacca','Leia Organa']
        }
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((persons) => this.setState({persons: persons.results}))
        
    }
    
    render() {
        console.log(this.state.persons);
        return (
            <div>
            <ul>
                {this.state.persons.map((person) => (
                    <li key={person.name}>{person.name}</li>
                ))}
            </ul>

           <StarWarsTable dataFromPersons = {this.state.persons}/>
            </div>
           
        )  
    }
}

export default Persons;