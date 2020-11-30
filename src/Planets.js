import React from 'react';

class Planets extends React.Component {

    constructor() {
        super();
        this.state = {
        planets: ['Tatooine','Alderaan','Yavin IV']
        }
    }
    render() {
        return (
            <ul>
                {this.state.planets.map(planet => (
                    <li key={planet}>{planet}</li>
                ))}
            </ul>
        )
    }
}

export default Planets;