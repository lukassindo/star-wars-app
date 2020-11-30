import React from 'react';
import {starWars} from './data.js';

class Planets extends React.Component {

    constructor() {
        super();
        // this.state = {
        // planets: ['Tatooine','Alderaan','Yavin IV']
        // }
    }
    render() {
        return (
            <ul>
                {starWars.planets.map(planet => (
                    <li key={planet}>{planet}</li>
                ))}
            </ul>
        )
    }
}

export default Planets;