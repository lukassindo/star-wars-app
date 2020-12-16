import React from 'react';
import {starWars} from './data.js';

class Planets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        planets: [],
        }

    }

    componentDidMount() {
        let arrayOfPlanets = [];  
        this.props.homes.forEach(info => {
            let home = info.homeworld;
            fetch(`${home}`, {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })  
            .then((response) => response.json())
            .then((homes) => {
               arrayOfPlanets.push(homes.name);
               
            }); 
    
        });
       
         this.setState({planets: arrayOfPlanets})
      
      }

     

    render() {
        return (
            <ul>
                {this.props.homes.map((data,index) => (
                    <li key={index}><span style={{color: "green"}}>{data.name}:</span> {data.homeworld}</li>
                ))}
            
            </ul>
        )
    }
}

export default Planets;