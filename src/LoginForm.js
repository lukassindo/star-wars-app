import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }



    render () {
        return (
            <form onSubmit={this.props.submit}>
                    <input onChange={(event)=>{this.props.handleMethod('login', event.target.value)}} name="login" type="text" placeholder="Username"/>
                    <input onChange={(event)=>{this.props.handleMethod('password', event.target.value)}} name="password" type="text" placeholder="Password"/>
                    <button type="submit">Login</button>
            </form>
        )
    }

}

export default LoginForm;