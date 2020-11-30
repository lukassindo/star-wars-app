import React from 'react';

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
                {this.state.starships.map(starship => (
                    <li key={starship}>{starship}</li>
                ))}
            </ul>
        )
    }
}

export default Starships;