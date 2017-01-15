import Trie from './Trie.js';

const words = require('./words.json');
const trie = new Trie(words);

it('builds a trie hash when initialized', () => {
  expect(trie.getTrieHash()).toBeInstanceOf(Object);
});

it('finds the correct word from the created trie from german words', () => {
  expect(trie.findAllMatchingFromTrie("autobahn")[0]).toBe("Die Autobahn");
});

it('returns an empty array when word is not found from words.txt / trie', () => {
  expect(trie.findAllMatchingFromTrie("sdfsdgasgsgf").length).toBe(0);
});
