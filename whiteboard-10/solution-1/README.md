
# whiteBoard 10

### problem domain

`Write a function checkBraces() to examine whether the pairs and the orders of { and } are correct in a string, using a Stack.`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-10`. once there, install NPM but typing in , `nmp install`. after that you need to install JEST and eslint which is done with `npm install -D jest eslint`. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js true
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
perfect matching
```
if you do

```javascript
node index.js false
```

you will get 
```javascript
Mixed Matched
```

### what is happening.
when you run this in the termial
```javascript
node index.js false/True
```

you are running this function 

```javascript
doThing.checkBraces = function(arr) { //The Big O is O(3n)
  if (!arr|| typeof arr !== 'string') return null;
  let test = new Stack();
  let array = arr.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '{') {
      test.push(array[i]);
    }
    if (array[i] === '}') {
      if (test.size === 0) {
        console.log('Mixed Matched'); 
        return 'Mixed Matched';
      }
      test.pop(array[i]);
    }
  }
  if (test.top === null) {
    console.log('perfect matching');
    return 'perfect matching';
  }
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
    expect(doThing.checkBraces()).toBe(null);
  });
  ```
this is checking to make sure the right thing, in this case its a string.
##test 2
```javascript
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.checkBraces(1)).toBe(null);
    expect(doThing.checkBraces({})).toBe(null);
  });
  ```
this is checking to make sure if we are getting the right answer, in this is the perfect matching 
  ##test 3
```javascript
  it('checks to see if its the right answer for matching pair', function() {
    expect(doThing.checkBraces(answer)).toEqual('perfect matching');
  });
  ```
this is checking to see if we pass in a string with mixed matching pairs of {} we will get the right answer
  ##test 4
```javascript
 it('checks to see if its the right answer for mixed match pair', function() {
    expect(doThing.checkBraces(answer2)).toEqual('Mixed Matched');
  });
  ```