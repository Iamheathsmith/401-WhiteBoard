
# whiteBoard 20

### problem domain

`given a string of words, find the highest srocing word given A = 1, B = 2, C = 3 and so on.`

below is our test string
```javascript
'this is how we do things bam'
```

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-21`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result

```javascript
{ maxValue: 'things', wordVal: 77 }
```


### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
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
```

### big O is.......
big O time is O(n^2);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

##tests

check to see if somethingis passed in

```javascript
 it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.high()).toBe(null);
  });
```

check to see if the right thing is passed in.

```javascript
it('checks to see if the right items are passed in.', function() {
    expect(doThing.high(1)).toBe(null);
    expect(doThing.high([1, 3])).toBe(null);
  });
```

checks to see if the right answer is given

```javascript
it('checks to see if its the right answer is given', function() {
    expect(doThing.high(test)).toEqual(answer);
  });
```

checks to see if the orignal is not given back. 

```javascript
 it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.high(test)).not.toEqual(test);
  });
```

