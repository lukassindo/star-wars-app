import React from 'react';
import PropTypes from 'prop-types';
import StarWarsFilms from './Films';
import { ThemeContext } from './contexts';

class TableRow extends React.Component {
    constructor(props) {
        super(props);

    }
    


    render() {
       
        return(
            <>
                {this.props.personChar.map((personData, index) =>(
                    <tr key={index} style={{border:"2px solid white"}}>
                        <td>{personData.name}</td>
                        <td>{personData.height}</td>
                        <td>{personData.mass}</td>
                        <td>{personData.eye_color}</td>
                        <td>{personData.skin_color}</td>
                        <td>{personData.birth_year}</td>
                        <td><StarWarsFilms charFilms = {personData.films}/></td>
                        <td><button style={{background: this.context.background, color: this.context.color}} onClick = {()=> {this.props.removeMethod(index)}}>Usuń</button></td>
                    </tr>
                    ))}   

                
            </>
            
        )
    }


}

TableRow.contextType=ThemeContext;
export default TableRow; 