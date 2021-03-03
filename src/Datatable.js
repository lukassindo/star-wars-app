import * as React from 'react';
import Cell from './Cell';
import { ThemeContext } from './contexts';


 class DataTable extends React.Component {

 constructor(props) {
    super(props);

    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
 }




  renderHeadingRow = (_cell, cellIndex) => {
    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={this.props.headings[cellIndex]}
        header={true}
      />
    )
  };
  
  renderRow = (_row, rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {this.props.rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={this.props.rows[rowIndex][cellIndex]}
            />
          )
        })}
        <td className="Cell"><button style={{background: this.context.background, color: this.context.color}} onClick = {()=> {this.props.removeMethod(rowIndex)}}>Usuń</button></td>
      </tr>
    )
  };

  render() {
    
    const theadMarkup = (
      <tr key="heading">
        {this.props.headings.map(this.renderHeadingRow)}
      </tr>
    );

    const tbodyMarkup = this.props.rows.map(this.renderRow);
  
    return (
      <>
      <table style={{margin: "50px auto"}} className="Table">
        <thead>{theadMarkup}</thead>
        <tbody>{tbodyMarkup}</tbody>
      </table>
 
       
       </>
    );
  }
}


DataTable.contextType=ThemeContext;

export default DataTable