import React from 'react';

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
                {this.state.persons.map(person => (
                    <li key={person}>{person}</li>
                ))}
            </ul>
        )
    }
}

export default Persons;