import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbox from './Searchbox.js'

class App extends Component {

  constructor(props) {
    super(props);
    const words = require('./words.json');
    const trie = makeTrie(words);
    this.state = {trie: trie};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Der Die Das</h2>
        </div>
        <p className="App-intro">
          Resolve the gender of a German word
        </p>
        <Searchbox trie={this.state.trie}/>
      </div>

    );
  }
}

export default App;

function makeTrie(words) {
  var root = {};

  for (var i = 0; i < words.length; ++i) {

    var word = words[i];
    var current = root;
    var word_splitted = word.split(" ");
    var rest = word_splitted[1];

    var rest_a = rest.split("");

    for (var j = 0; j < rest_a.length; ++j) {
      var character = rest_a[j];
      if (current[character] === undefined) {
        current[character] = {};
      }
      current = current[character];
    }
    current["$"] = word;
  }
  return root;
}
