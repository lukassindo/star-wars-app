import React from 'react';
import LoginService from './services/login'
import charactersService from './services/characters'


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            login: "",
            password: "",
            characters: [],
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
        LoginService.login(this.state.login, this.state.password);
    }
    
    handleUserData(event) {
        this.setState({ [event.target.name]:event.target.value});
    }

    handleSelectData(event) {
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
                <form onSubmit={this.handleData}>
                    <input onChange={this.handleUserData} name="login" type="text" placeholder="Username"/>
                    <input onChange={this.handleUserData} name="password" type="text" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
                <select onChange={this.handleSelectData}>
                        <option>Pick up StarWars Character</option>
                    {this.state.characters.map((selectItem,index) => (
                        <option key={index} value={selectItem.name}>{selectItem.name}</option>
                    ))}
                </select>
            </div>



       )
    }
}


export default LoginForm;