import React from 'react';
import data from './data';


class Films extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
            films: [],
        }



       
    }

    componentDidMount(){
                let movies;
                const titles = [];
                if (this.props.charFilms) {
                    movies = this.props.charFilms.map(movie => {
                        fetch(`${movie}`)
                        .then((response) => response.json())
                        .then((data) =>  titles.push(data.title))
                        
                    });
                    this.setState({films: titles})
                    console.log(titles)
                }             
   }
  
   


    render() {
       
       
        return ( 
            <ul>
               {this.state.films.map((film, id) => (
                   <li key={id}>{film}</li>
               ))}
               
            </ul>
        )
        
    }

}

export default Films; 