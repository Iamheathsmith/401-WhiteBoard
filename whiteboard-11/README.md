
# whiteBoard 11

### problem domain

`You have an integer array which contains numbers from 1 to 100 but one number is missing, you need to write a function calculateMissing = (array) => {...} to find that missing number in an array.`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-11`. once there, install NPM but typing in , `nmp install`. after that you need to install JEST and eslint which is done with `npm install -D jest eslint`. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 1
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
[3]
```
you can also enter in a different number like 3 and that will return 3 missing numbers from a different array.

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 3
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
[ 3, 13, 17 ]
```


### what is happening.
when you run this in the termial
```javascript
node index.js
```

you are running this function 

```javascript
doThing.findMissingNum = function(arr) { //The Big O is O(n)
  if(!arr || !Array.isArray(arr)) return null;
  arr.sort((function(a, b) {return a - b;}));
  let missing = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i+1] - arr[i]) > 1) {
      missing.push(arr[i+1] - 1);
    }
  }
  return missing;
};
```

### big O is.......
big O time is O(n);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

##test 1
this is chcking to see if anything is passed into the arguments
```javascript
it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMissingNum ()).toBe(null);
  });
  ```
this is checking to make sure the right thing is passed in with the correct amout of them, this case a string or no numbers
##test 2
```javascript
 it('checks to see if the right items are passed in.', function() {
    expect(doThing.findMissingNum (123)).toBe(null);
    expect(doThing.findMissingNum ('test')).toBe(null);
  });
  ```
this is checking to make sure if we are getting the right answer for differnt numbers.
  ##test 3
```javascript
 it('checks to see if its the right answer', function() {
    expect(doThing.findMissingNum (arr)).toEqual([3]);
    expect(doThing.findMissingNum (arr1)).toEqual([3,13,17]);
  });
  ```
this is checking to see if we get the wrong answer.
  ##test 4
```javascript
  it('checks to see if its the right answer', function() {
    expect(doThing.findMissingNum (arr)).not.toEqual(arr2);
  });
  ```