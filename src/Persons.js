import React from 'react';

class Persons extends React.Component {

    constructor() {
        super();
        this.state = {extra_name:'Leia Organa'}
    }
    render() {
        return (
            <ul>
                <li>Han Solo</li>
                <li>Chewbacca</li>
                <li>{this.state.extra_name}</li>
            </ul>
        )
    }
}

export default Persons;