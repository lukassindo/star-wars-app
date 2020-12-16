import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './Row';


class StarWarsTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            persons : [],
            notChangedPersons : [],
        }        

        this.removeRow = this.removeRow.bind(this);
        this.retreatRows = this.retreatRows.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')  
        .then((response) => response.json())
        .then((persons) => this.setState({persons: persons.results, notChangedPersons: persons.results}, this.sendData));   
    }
   

    removeRow(index) {
        let newArray = [...this.state.persons];
        newArray.splice(index, 1);
        this.setState({persons: newArray});
    }

    sendData() {
        this.props.dataChild(this.state.notChangedPersons);
    }

    retreatRows() {
        this.setState({persons:this.state.notChangedPersons});

     }

    render() {
       
        return (
            <div>
                <h2>All about characters</h2>
                <table id ="chars" style={{borderCollapse:"collapse", margin: "0 auto"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Mass</th>
                            <th>Eye color</th>
                            <th>Skin color</th>
                            <th>Birth year</th>
                            <th>Films</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        
                        <TableRow personChar={this.state.persons} removeMethod = {this.removeRow}/>
                       
                    </tbody>
                   
                </table>
                <button className="retreat_btn" onClick={this.retreatRows}>Przywróć usunięte wiersze</button>
                <button className="retreat_btn" onClick={this.sendData}>Wyślij dane</button>
               

            </div>
        )
    }
    
    
}

export default StarWarsTable; 