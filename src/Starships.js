import React from 'react';
import {starWars} from './data.js';
import Datatable from './Datatable';

class Starships extends React.Component {

    constructor() {
        super();
        this.state = {

            headings: ['name','model','crew', 'remove row'],
            rows: [],
            ships: [],

        }

        this.getValues = this.getValues.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.retreatRows = this.retreatRows.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/starships/')  
        .then((response) => response.json())
        .then((ships) => this.setState({ships: ships.results}, this.getValues));
    }



    removeRow(rowIndex) {
        let newArray = [...this.state.rows];
        newArray.splice(rowIndex, 1);
        this.setState({rows: newArray});
    } 

    retreatRows() {
       this.getValues();
    }

    getValues() {
        let newRows = [];
        this.state.ships.map(value => {
        var results = [value.name, value.model, value.crew];
           newRows.push(results);
        })
        this.setState({rows: newRows});    
    }

    render() {
        return (
            <>
            <Datatable headings = {this.state.headings} rows = {this.state.rows} removeMethod = {this.removeRow}/>
            <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
            </>
        )
    }
}

export default Starships;