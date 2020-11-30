import React from 'react';
import {starWars} from './data.js';

class Starships extends React.Component {

    constructor() {
        super();
        this.state = {
            starships: ['Y-wing', 'Millennium Falcon','Star Destroyer']
        }
    }
    render() {
        return (
            <ul>
                {starWars.starships.map(starship => (
                    <li key={starship}>{starship}</li>
                ))}
            </ul>
        )
    }
}

export default Starships;