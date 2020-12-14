import React from 'react'; 

class TestKey extends React.Component {
    constructor() {
        super();
        this.state = {
            numbers: [1, 2, 6 , 7 ,9],
        }
        setInterval(() => {
            this.everySecond();
        }, 1000 )  


        
    }
     


    everySecond() {
        
        let randomIndex = Math.floor(Math.random() * 4);
        let newArray = [...this.state.numbers];
        newArray[randomIndex] = Math.random();
        this.setState({numbers: newArray}); 
    }


    render() {
        return (
            <>
            <h1>Hello World</h1>
            <ul>
            {this.state.numbers.map((number,i) => (
                <li key={i}>{number}</li>
            ))}
            </ul>
            </>
        )
    }
}

export default TestKey;