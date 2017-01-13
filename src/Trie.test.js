import Trie from './Trie.js';

const words = require('./words.json');

it('builds trie hash when initialized', () => {
  const trie = new Trie(words);
  expect(trie.getTrieHash()).toBeInstanceOf(Object);
});

it('')
