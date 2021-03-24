import React from 'react';
import {Starships} from './Starships';
import {Planets} from './Planets';
import Datatable from './Datatable';
import planetService from './services/planet';
import shipService from './services/ship';

function withSubscription(WrappedComponent, dataSource, headingData) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                rows: [],
                data: [],
            }
    
            this.getValues = this.getValues.bind(this);
            this.removeRow = this.removeRow.bind(this);
            this.retreatRows = this.retreatRows.bind(this);
        }

        async componentDidMount() {
            const data = await dataSource();
            this.setState({data},this.getValues);
        }

        getValues() {
            this.setState({rows: this.state.data});    
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
                <WrappedComponent homes={this.props.homes}/>
                <Datatable headings = {headingData} rows = {this.state.rows} removeMethod = {this.removeRow}/>
                <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
                </>
            )
        }



    }
}

const StarshipsTable = withSubscription(Starships, shipService.getShips, ['name','model','cost','crew','cargo'])
const PlanetsTable = withSubscription(Planets, planetService.getPlanets, ['name','climate','diameter','terrain','gravity'])

export {
    StarshipsTable,
    PlanetsTable
}   