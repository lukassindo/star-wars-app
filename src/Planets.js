import React from 'react';

export const Planets = (props) => {
  
    return (
        <>
        <h2>Our Heroes Planets</h2>
        <ul>
            {props.homes.map((data,index) => (
                <li key={index}><span style={{color: "green"}}>{data.name}:</span> {data.homeworld}</li>
            ))}
        
        </ul>
        </>
    )
  
}

