import React from 'react';
import {starWars} from './data.js';
import StarWarsTable from './Table';

class Persons extends React.Component {

    constructor() {
        super();
        
    }


    
    render() {
       
        return (
            <div>
            

           <StarWarsTable />
            </div>
           
        )  
    }
}

export default Persons;