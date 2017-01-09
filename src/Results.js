import React from 'react';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results_a: this.props.results};
    console.log("bää")
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
