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
  getTrie() {
    return this.trie;
  }
}
export default Trie;
