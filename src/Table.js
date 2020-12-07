import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './Row';


class StarWarsTable extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            persons: props.dataFromPersons,
        }
    }

   

    render() {
       
        return (
            <div>
                <h2>All about characters</h2>
                <table>
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
                        
                        <TableRow personChar={this.props.dataFromPersons}/>
                    </tbody>
                   
                </table>


            </div>
        )
    }
    
    
}

export default StarWarsTable; 