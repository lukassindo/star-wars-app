import React from 'react';
import PropTypes from 'prop-types';

class Dummy extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            header: "Star Wars - the best sf world ever!",
            color: props.color,
        };
        this.changeText = this.changeText.bind(this);

    }


    changeText() {
        this.setState({header:"dummy text", color: "#000"})
        console.log("change me");

    }



    render()  {
        return (
            <div>
                <h2>{this.state.header}</h2>
                <button style={{color: this.state.color, backgroundColor: "yellow"}}   onClick={this.changeText}>{this.props.label}</button>
            </div>
        )
    }



}


Dummy.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string
};

export default Dummy;