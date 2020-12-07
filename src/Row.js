import React from 'react';
import PropTypes from 'prop-types';
import Films from './Films';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.personChar)
        return(
            <>
                {this.props.personChar.map((personData, index) =>(
                    <tr>
                        <td key={personData.index}>{personData.name}</td>
                        <td key={personData.index}>{personData.height}</td>
                        <td key={personData.index}>{personData.mass}</td>
                        <td key={personData.index}>{personData.eye_color}</td>
                        <td key={personData.index}>{personData.skin_color}</td>
                        <td key={personData.index}>{personData.birth_year}</td>
                        <td><Films charFilms = {personData.films}/></td>
                    </tr>
                    ))}   

                
            </>
            
        )
    }


}


export default TableRow; 