'use strict';


module.exports = new class {
  high(x) {
    if(!x || typeof x !== 'string') return null;
    var words = x.split(' '),
      wordVal = 0,
      maxValue = '';
    for(let i = 0; i < words.length; i++){
      var singleWord = words[i],
        valOfWord = 0;
      for(let p = 0; p < singleWord.length; p++){
        valOfWord += (singleWord.charCodeAt(p) - 96);
      }
      if(valOfWord > wordVal){
        wordVal = valOfWord;
        maxValue = singleWord;
      }
    }
    return {maxValue, wordVal};
  }
};

