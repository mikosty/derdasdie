import React from 'react';


class Results extends React.Component {
  constructor(props) {
    console.log("const");
    super(props);
    this.state = {
      results_a: this.props.results,
      searchValue: this.props.searchValue
    };
  }

  render() {
    return(
        <ul>
          {this.state.results_a.map(function(listValue){
            return <li>{listValue}</li>
          })}
        </ul>
  );
  }
}
export default Results;
