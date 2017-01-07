import React from 'react';


class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
      trie: this.props.trie
    };
    //console.log(this.state.trie);

    this.handleChange = this.handleChange.bind(this);
  }

  findAllMatchingFromTrie(word) {
    var word_a = word.split("");
    word_a[0] = word_a[0].toUpperCase();
    var current = this.state.trie;
    for (var i = 0; i < word_a.length; ++i) {
      var character = word_a[i];
        if(current[character] === undefined) {
          return [];
        }
        else {
          current = current[character];
        }
    }
    //this.setState({results: getResults(current)});
    return getResults(current);
  }



  handleChange(event) {
    this.setState({value: event.target.value});
    //alert('A name was submitted: ' + event.target.value);
        //event.preventDefault();
    this.setState({results: this.findAllMatchingFromTrie(event.target.value)});
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

function getResults(trie_part) {
  var results = [];
  const keys = getKeys(trie_part);

  for (var i = 0; i < keys.length; ++i) {
    var character = keys[i];
      if(character === "$") {
        results.push(trie_part[character]);
      }
      else {
        results.push.apply(results, getResults(trie_part[character]));
      }
  }

  return results;
}

function getKeys(hash) {
  var keys = [];
  for (var key in hash) {
    if (hash.hasOwnProperty(key)) {
    keys.push(key);
    }
  }
  return keys;
}
