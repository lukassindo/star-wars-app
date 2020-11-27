import React from 'react';

class Movies extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: ['A New Hope', 'The Empire Strikes Back','Return of the Jedi']
        }
    }
    render() {
        return (
            <ul>
               {this.state.movies.map(movie => (
                    <li key={movie}>{movie}</li>
                ))}
            </ul>
        )
    }
}

export default Movies;