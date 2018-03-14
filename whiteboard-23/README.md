
# whiteBoard 23

### problem domain

`white a method to sort an array of strings so that all the anagrams are next to each other.. note - we can use a hash table to map the sorted version of a word to a list of its anagrams`

below is our test string
```javascript
let test = ['acre', 'race', 'care', 'act', 'cat', 'tac'];
```

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-22`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result

```javascript
['acre', 'race', 'care', 'act', 'cat', 'tac'];
```


### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
   doThing(arg) {
    if (!arg || !Array.isArray(arg)) return null;
    let table = {};
    let final = [];

    arg.map(val => {
      let hash = hashTable.hashKey(val);
      table[hash] ? table[hash].push(val) : table[hash] = [val];
    });  
    
    for (let i in table) {
      if (table[i]) {
        final.push(table[i]);
      }
    }
    return final.reduce((a, b) => a.concat(b));
  }
```

### big O is.......
big O time is O(n);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

##tests

check to see if somethingis passed in

```javascript
it('checks to see if there is anything to pass into the function', function() {
    expect(testThing.doThing()).toBe(null);
  });
```

check to see if the right thing is passed in.

```javascript
 it('checks to see if the right items are passed in.', function() {
    expect(testThing.doThing(1)).toBe(null);
    expect(testThing.doThing('test')).toBe(null);
  });
```

checks to see if the right answer is given

```javascript
it('checks to see if its the right answer is given', function() {
    expect(testThing.doThing(test)).toEqual(answer);
  });
```

checks to see if the orignal is not given back. 

```javascript
 it('checks to see if its does not return the same data passed in.', function() {
    expect(testThing.doThing(test)).not.toEqual(wrong);
  });
```

