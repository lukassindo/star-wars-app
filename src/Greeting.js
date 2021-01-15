import React from 'react';

class Greeting extends React.Component {

    render () {
        return (
            <p>Witaj {this.props.user.username}. Twoja rola to {this.props.user.role}</p>
        )
    }

}

export default Greeting;