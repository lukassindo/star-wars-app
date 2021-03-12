import React from 'react';
import {starWars} from './data.js';
import planetService from './services/planet';
import Datatable from './Datatable';

class Planets extends React.Component {
    HEADING = ['name','climate','diameter','terrain','gravity'];
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            planets: [],
        }

        this.getPlanetsInfo = this.getPlanetsInfo.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.retreatRows = this.retreatRows.bind(this);

    }

    componentDidMount() {

        planetService.getPlanets()
            .then((planets) =>  {
                this.setState({planets},this.getPlanetsInfo);
            });      
      
    }

    getPlanetsInfo() {
        this.setState({rows: this.state.planets});    
    }

    removeRow(rowIndex) {
       
            console.log(this.state.rows);
            let newArray = [...this.state.rows];
            newArray.splice(rowIndex, 1);
            this.setState({rows: newArray});
       
    } 

    retreatRows() {
       this.getPlanetsInfo();
    }

    render() {
       
        return (
            <>
            <h2>Our Heroes Planets</h2>
            <ul>
                {this.props.homes.map((data,index) => (
                    <li key={index}><span style={{color: "green"}}>{data.name}:</span> {data.homeworld}</li>
                ))}
            
            </ul>
            <Datatable headings = {this.HEADING} rows = {this.state.rows} removeMethod={this.removeRow} retreat = {this.retreatRows}/>
            <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
            </>
        )
    }
}

export default Planets;