import React from 'react';

class Planets extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <ul>
                <li>Tatooine</li>
                <li>Alderaan</li>
                <li>{this.state.extra_name}</li>
            </ul>
        )
    }
}

export default Planets;