import React, {useState} from 'react';
import SingleMovie from './SingleMovie';



export default function(props) {


    return (
        <ul>
            <h2>Star Wars Movies</h2>
            <SingleMovie movies={props.movies}/>
        </ul>
    )
} 


