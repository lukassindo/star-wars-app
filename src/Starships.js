import React from 'react';
import {starWars} from './data.js';
import Datatable from './Datatable';
import ship from './services/ship';
import stockInfo from './services/stock';

class Starships extends React.Component {
    HEADING = ['name','model','cost','crew','cargo'];
    HEADING2 = ['date','open','high','low','close','volume'];
    constructor() {
        super();
        this.state = {
            rows: [],
            ships: [],
            stock: [],

        }

        this.getValues = this.getValues.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.retreatRows = this.retreatRows.bind(this);
    }

    async componentDidMount() {
        const ships = await ship.getShips();
        this.setState({ships},this.getValues);

        const stock = await stockInfo.getStockInfo();
        this.setState({stock});

    }

    getValues() {
        this.setState({rows: this.state.ships});    
    }

    removeRow(rowIndex) {
        let newArray = [...this.state.rows];
        newArray.splice(rowIndex, 1);
        this.setState({rows: newArray});
    } 

    retreatRows() {
       this.getValues();
    }

    render() {

        return (
            <>
            <Datatable headings = {this.HEADING} rows = {this.state.rows} removeMethod = {this.removeRow}/>
            <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
            {/* <Datatable headings = {this.HEADING2} rows = {this.state.stock} removeMethod = {this.removeRow}/> */}
            </>
        )
    }
}

export default Starships;