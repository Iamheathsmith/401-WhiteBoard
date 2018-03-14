
# whiteBoard 21

### problem domain

`Given a 2-dimensional array of numbers, rotate the array 90 degrees.`

```javascript
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// rotated 90 degrees
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]
```

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-20`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result

```javascript
[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
```

this is cause its taking the orginal array and rotating it 90 degrees.

```javascript
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
```

### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
 rotate(arr) {
    if(!arr || !Array.isArray(arr)) return null;
    arr.reverse();
    return arr[0].map((val, i) => arr.map(row => row[i]));
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
    expect(doThing.rotate()).toBe(null);
  });
```

check to see if the right thing is passed in. this case an array.

```javascript
it('checks to see if the right items are passed in.', function() {
    expect(doThing.rotate(1)).toBe(null);
    expect(doThing.rotate('bam')).toBe(null);
  });
```

checks to see if the right answer is given

```javascript
it('checks to see if its the right answer is given', function() {
    expect(doThing.rotate(test)).toEqual(answer);
  });
```

checks to see if the orignal is not given back. 

```javascript
 it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.rotate(test)).not.toEqual(test);
  });
```

