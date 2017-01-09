import React, { Component } from 'react';
import './App.css';
import Searchbox from './Searchbox.js';
import Trie from './Trie.js';

class App extends Component {

  constructor(props) {
    super(props);
    const words = require('./words.json');
    const trie = new Trie(words);
    this.state = {trie: trie};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
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
