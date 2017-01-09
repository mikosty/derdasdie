class Trie {

  constructor(words) {
    this.words = words;
    this.trie = this.makeTrie(words)
  }

  makeTrie(words) {
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

  getTrieHash() {
    return this.trie;
  }

  findAllMatchingFromTrie(word) {
    var word_a = word.split("");

    if(word_a.length === 0) {
      return [];
    }

    word_a[0] = word_a[0].toUpperCase();
    var current = this.trie;
    for (var i = 0; i < word_a.length; ++i) {
      var character = word_a[i];
        if(current[character] === undefined) {
          return [];
        }
        else {
          current = current[character];
        }
    }
    return this.getResults(current);
  }


  getResults(trie_part) {
    var results = [];
    const keys = this.getKeys(trie_part);

    for (var i = 0; i < keys.length; ++i) {
      var character = keys[i];
        if(character === "$") {
          results.push(trie_part[character]);
        }
        else {
          results.push.apply(results, this.getResults(trie_part[character]));
        }
    }
    return results;
  }

  getKeys(hash) {
    var keys = [];
    for (var key in hash) {
      if (hash.hasOwnProperty(key)) {
      keys.push(key);
      }
    }
    return keys;
  }
}
export default Trie;
