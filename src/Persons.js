import React from 'react';
import {starWars} from './data.js';
import StarWarsTable from './Table';

class Persons extends React.Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }


    getData(childData) { 
        this.props.getDataFromPersons(childData);
    }

    
    
    render() {
      
       
        return (
            <div>
            

           <StarWarsTable dataChild = {this.getData}/>
            </div>
           
        )  
    }
}

export default Persons;