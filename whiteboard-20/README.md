
# whiteBoard 20

### problem domain

`Create a utils.js module which exports the following methods: map(), filter(), and reduce(). You will implement these methods from scratch, not utilizing the built-in array methods.`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-19`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js map
```
you should see the original array just doubled.

```javascript
[ 2, 6, 10, 14, 18 ]
```

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js filter
```
you should see just the numbers in the orginal array higher or equal to 5.

```javascript
[ 5, 7, 9 ]
```

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js reduce
```
it should double the array values and then add them all together.

```javascript
50
```



### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
  map(arr, cb) {
    if(!arr || !Array.isArray(arr) || typeof arr === 'string' || !cb) return null;
    const result = [];
    for (let i = 0; i < arr.length; i++) {      
      result.push(cb(arr[i]));
    }
    return result;
  }

  filter(arr, cb) {
    if(!arr || !Array.isArray(arr) || typeof arr === 'string' || !cb) return null;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  reduce(arr, cb, initVal) {
    if(!arr || !Array.isArray(arr) || typeof arr === 'string') return null;
    let result = initVal;
    let newArr = new Array(...arr);
    for (let i = 0; i < newArr.length; i++) {
      result += cb(newArr[i]);
    }
    return result;
  }
```

### big O is.......
big O time is O(n);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

##test for MAP
```javascript
describe('#solution module for MAP', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.map()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.map(1, cb)).toBe(null);
    expect(doThing.map('bam', cb)).toBe(null);
    expect(doThing.map(test)).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.map(test, cb)).toEqual(answer);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.map(test, cb)).not.toEqual(test);
  });
});
```

##test for FILTER
```javascript
describe('#solution module for FILTER', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.filter()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.filter(1, cbFil)).toBe(null);
    expect(doThing.filter('bam', cbFil)).toBe(null);
    expect(doThing.filter(test)).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.filter(test, cbFil)).toEqual([5, 7, 9]);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.filter(test, cbFil)).not.toEqual(test);
  });
});
```

##test for REDUCE
```javascript
describe('#solution module for REDUCE', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.reduce()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.reduce(1, cb)).toBe(null);
    expect(doThing.reduce('bam', cb)).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.reduce(test, cb, 0)).toEqual(50);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.reduce(test, cb)).not.toEqual(test);
  });
});
```