import React from 'react';
import UserPanel from './UserPanel';
import Chart from './Chart';
import { ThemeContext, subject } from './contexts';
import Dummy from './Dummy';

class Other extends React.Component {
    constructor(props)  {
        super(props);
    }


   



    render()  {
        return (
            <>
                <Dummy label={"submit"} color={"red"}/>
                <Dummy label={"Go there"} color={"white"}/>

                <UserPanel/>
                {this.props.fetched &&
                <Chart titles={this.props.titles} vehicles={this.props.vehicles}/>
                }

                <button onClick={this.props.changeBackground}>Toggle background</button>
                </>
        )
    }



}



export default Other;