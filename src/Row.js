import React from 'react';
import PropTypes from 'prop-types';
import Films from './Films';

class TableRow extends React.Component {
    constructor(props) {
        super(props);

        this.deleteRow= this.deleteRow.bind(this);
    }
    

    deleteRow(e) {
        const parent = e.target.parentNode.parentNode;
        parent.className = 'hidden';
        console.log(parent);
    }

    render() {
        console.log(this.props.personChar)
        return(
            <>
                {this.props.personChar.map((personData, index) =>(
                    <tr style={{border:"2px solid white"}}>
                        <td key={personData.index}>{personData.name}</td>
                        <td key={personData.index}>{personData.height}</td>
                        <td key={personData.index}>{personData.mass}</td>
                        <td key={personData.index}>{personData.eye_color}</td>
                        <td key={personData.index}>{personData.skin_color}</td>
                        <td key={personData.index}>{personData.birth_year}</td>
                        <td><Films charFilms = {personData.films}/></td>
                        <td><button onClick = {this.deleteRow}>Usuń</button></td>
                    </tr>
                    ))}   

                
            </>
            
        )
    }


}


export default TableRow; 