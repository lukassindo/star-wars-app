import React from 'react';
import {starWars} from './data.js';
import StarWarsTable from './Table';
import Datatable from './Datatable';
import peopleService from './services/people'


class Persons extends React.Component {
    HEADING = ['name','height','mass','eye color','skin color','birth year',  'films', 'remove row'];

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

        this.state = {
            rows: [],
            persons: [],
        }

        this.getValues = this.getValues.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.retreatRows = this.retreatRows.bind(this);
    }

    async componentDidMount() {
        const persons = await peopleService.getPeoples()
            // .then((persons) => this.setState({persons: persons.results}, this.getValues));
        this.setState({persons}, this.getValues);
    }

    getValues() {
        console.log(this.state.persons);
        let newRows = [];
        this.state.persons.map(value => {
            console.log(value);
        let results = [value.name, value.height, value.mass, value.eye_color, value.skin_color, value.birth_year, value.films[0]];
            console.log(results);
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
        
       
        return (
            <div>
            

           <StarWarsTable dataChild = {this.getData}/>
           <Datatable headings = {this.HEADING} rows = {this.state.rows} removeMethod = {this.removeRow} retreat = {this.retreatRows}/>
           <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
            </div>
           
        )  
    }
}

export default Persons;