import React, {useState} from 'react';
import SingleMovie from './SingleMovie';



export default function(props) {


    return (
        <ul>
               <SingleMovie movies={props.movies}/>
        </ul>
    )
} 


