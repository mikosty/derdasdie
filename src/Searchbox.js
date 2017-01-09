import React from 'react';
//import Results from './Results.js'


class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.trie = this.props.trie;
    this.state = {
      value: '',
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
    //event.preventDefault();
    this.setState({results: this.trie.findAllMatchingFromTrie(event.target.value)});
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="search">
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
