import React from 'react';
import PropTypes from 'prop-types';
import Films from './Films';

class TableRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [...props.personChar],
        };

        this.deleteRow = this.deleteRow.bind(this);
    }

    /*  componentDidUpdate jest wywoływany tylko wtedy gdy zmienią się jego propsy lub stan
        pozwala nam to na kontrolę wyświetlania komponentu w momencie jego aktualizacji.
        Jednak jest to niebezpieczne bo musimy wiedzieć kiedy przestać aktualizować, dlatego sprawdzam
        czy poprzednie propsy jakie miałem są różne od tych co będę miał teraz. Jeśli są takie same to nie zmieniam stanu
        Co tak naprawdę się działo. 
        Konstruktor jest wywoływany tylko raz przez Reacta w momencie kiedy będzie uruchamiana strona (konstruuje wszystkie obiekty tylko raz)
        Ale w momencie kiedy robimy update propsów, obiekt ponownie się renderuje, ale stan się nie zmienia, bo nie ma jak. 
        Aby zmienić stan musimy go zmienić w componentDidUpdate, metodzie lifecycle, która jest wykonywana w momencie kiedy propsy albo state się zmienił.
        Stąd dostawaliśmy puste tablice, bo elementy w konstruktorze były puste z persons. Dopiero po fetchu (który chwile trwa) się zaaktualizowały, no ale już po
        czasie, bo konstruktor już był wywołany.

        Jednak korzystani z props i state w ten sposób to jest anty patern Reacta i raczej nie powinno się go używać (wyjątek jedna sytuacja - ale to się szybko przekonasz)
        Więcej info: https://pl.reactjs.org/docs/react-component.html#constructor
    */
    componentDidUpdate(prevProps, prevState) {
        if(prevProps == this.props) return;

        this.setState({persons: [...this.props.personChar]});
    }
    
    deleteRow(e) {
        const parent = e.target.parentNode.parentNode;
        parent.className = 'hidden';
        console.log(parent);
    }

    render() {
        return(
            <>
                {this.state.persons.map((personData, index) =>(
                    <tr key={index} style={{border:"2px solid white"}}>
                        <td>{personData.name}</td>
                        <td>{personData.height}</td>
                        <td>{personData.mass}</td>
                        <td>{personData.eye_color}</td>
                        <td>{personData.skin_color}</td>
                        <td>{personData.birth_year}</td>
                        <td><Films charFilms = {personData.films}/></td>
                        <td><button onClick = {this.deleteRow}>Usuń</button></td>
                    </tr>
                    ))}
            </>
        )
    }
}


export default TableRow; 