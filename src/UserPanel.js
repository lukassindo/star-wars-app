import React from 'react';
import LoginService from './services/login'
import charactersService from './services/characters'
import LoginForm from './LoginForm'
import Greeting from './Greeting'

class UserPanel extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            login: "",
            password: "",
            characters: [],
            user: {},
            isLogged: false,
        } 

        this.handleData = this.handleData.bind(this);
        this.handleUserData = this.handleUserData.bind(this);
        this.handleSelectData = this.handleSelectData.bind(this);
    }

    async componentDidMount() {
        const characters = await charactersService.getCharacters();
        this.setState({characters});
    }

    handleData(event) {
        event.preventDefault();
        console.log(this.state);
        LoginService.login(this.state.login, this.state.password)
            .then((user) =>{
                this.setState({user, isLogged: true});
            })
        
    
    }
    
    handleUserData(key,value) {
        this.setState({[key]:value});
    }

    handleSelectData( event) {
        let persons = [...this.state.characters];
        const name = event.target.value;
        persons.forEach(person => {
            if(name === person.name) {
                alert(`You have picked ${name} with ${person.hair_color} hair color`);
            }
        });
    }

    render() {

        return (
           <div className="forms">
                {this.state.isLogged ? <Greeting user = {this.state.user}/> : <LoginForm submit={this.handleData} handleMethod={this.handleUserData}/>}
                <select onChange={this.handleSelectData}>
                        <option>Pick up StarWars Character</option>
                    {this.state.characters.map((selectItem,index) => (
                        <option key={index} value={selectItem.name}>{selectItem.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}


export default UserPanel;