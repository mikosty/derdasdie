import React from 'react';


class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
      words: this.props.words,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //alert('A name was submitted: ' + event.target.value);
        //event.preventDefault();
    this.setState({results: getResults(this.state.words, event.target.value)});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <ul>
          {this.state.results.map(function(listValue){
            return <li>{listValue}</li>
          })}
        </ul>

      </div>


    );
  }
}
export default Searchbox;

function getResults(words, word) {
  return [word, word, word];
}
