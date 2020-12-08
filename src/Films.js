import React from 'react';
import data from './data';


class Films extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            films: props.charFilms,
        }
        
    }
  
  

    render() {
        
            console.log(this.props.charFilms)

            return (
                <ul>
                    {this.props.charFilms ? 
                         this.props.charFilms.map((film) => (
                            <li key={film}>{film}</li>
                        )) : (
                            <p>Loading</p>
                         )
                    }
                </ul>
            )

      
        
    }

}

export default Films; 