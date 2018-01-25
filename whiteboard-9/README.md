
# whiteBoard 8

### problem domain

`Write a function which accepts n and a linked list as it's arguments, and will return the nth from last node in a linked list`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-9`. once there, install NPM but typing in , `nmp install`. after that you need to install JEST and eslint which is done with `npm install -D jest eslint`. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 2
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
SLL {value: 5, next:{ value: 7, next: null } }
```


### what is happening.
when you run this in the termial
```javascript
node index.js
```

you are running this function 

```javascript
doThing.findNthNodeFromEnd = function(n, arr) { 
  if (!n || !arr || typeof n !== 'number' || typeof arr !== 'object') return null;
  arr.reverseSLL();
  let current = arr.head;
  for(let i = 1; i < n; i ++) {
    current = current.next;
    if(!current) return 'the SLL does not have this node index';
  }
  arr.reverseSLL();
  console.log('this',current);
  return current;
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
    expect(doThing.findNthNodeFromEnd()).toBe(null);
  });
  ```
this is checking to make sure the right thing is passed in with the correct amout of them, this case a string or no numbers
##test 2
```javascript
it('checks to see if the right items are passed in both number and test SLL.', function() {
    expect(doThing.findNthNodeFromEnd('pizza', test)).toBe(null);
    expect(doThing.findNthNodeFromEnd('pizza')).toBe(null);
    expect(doThing.findNthNodeFromEnd(1, 'pizza')).toBe(null);
  });
  ```
this is checking to make sure if we are getting the right answer for differnt numbers.
  ##test 3
```javascript
it('checks to see if its the right answer', function() {
    expect(doThing.findNthNodeFromEnd(1, test)).toEqual(answer);
    expect(doThing.findNthNodeFromEnd(2, test)).toEqual(answer2);
  });
  ```
this is checking to see if we get the wrong answer.
  ##test 4
```javascript
  it('checks to see if its the right answer', function() {
    expect(doThing.findNthNodeFromEnd(2, test)).not.toEqual(answer);
  });
  ```