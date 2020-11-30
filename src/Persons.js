import React from 'react';
import {starWars} from './data.js';
class Persons extends React.Component {

    constructor() {
        super();
        this.state = {
            persons : ['Han Solo','Chewbacca','Leia Organa']
        }
    }
    render() {
        return (
           
            <ul>
                {starWars.persons.map(person => (
                    <li key={person}>{person}</li>
                ))}
            </ul>
        )
    }
}

export default Persons;