import React from 'react';
import {starWars} from './data.js';
import StarWarsTable from './Table';
import Datatable from './Datatable';

class Persons extends React.Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

        this.state = {
            headings: ['name','height','mass','eye color','skin color','birth year', 'remove row'],
            rows: [],
            persons: [],
        }

        this.getValues = this.getValues.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.retreatRows = this.retreatRows.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')  
        .then((response) => response.json())
        .then((persons) => this.setState({persons: persons.results}, this.getValues));
    }

    getValues() {
        let newRows = [];
        this.state.persons.map(value => {
        var results = [value.name, value.height, value.mass, value.eye_color, value.skin_color, value.birth_year];
           newRows.push(results);
        })
        this.setState({rows: newRows});    
    }

    removeRow(rowIndex) {
        let newArray = [...this.state.rows];
        newArray.splice(rowIndex, 1);
        this.setState({rows: newArray});
    } 

    retreatRows() {
       this.getValues();
    }

    getData(childData) { 
        this.props.getDataFromPersons(childData);
    }

    
    
    render() {
       console.log(this.state.persons);
       
        return (
            <div>
            

           <StarWarsTable dataChild = {this.getData}/>
           <Datatable headings = {this.state.headings} rows = {this.state.rows} removeMethod = {this.removeRow} retreat = {this.retreatRows}/>
           <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
            </div>
           
        )  
    }
}

export default Persons;