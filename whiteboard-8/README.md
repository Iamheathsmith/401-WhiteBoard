
# whiteBoard 8

### problem domain

Write a function that accepts the head of two linked list as it's two arguments, and return the intersection of those two linked lists in a new SLL

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-8`. once there, install NPM but typing in , `nmp install`. after that you need to install JEST which is done with `npm install -D jest`. this will install the testing package

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
SLL {
  head: Node { value: 5, next: Node { value: 7, next: null } } }
```


### what is happening.
when you run this in the termial
```javascript
node index.js
```

you are running this function 

```javascript
doThing.findMatch = function(arr, arr1) {
  if (!arr || !arr1 || typeof arr !== 'object' || typeof arr1 !== 'object') return null;
  let table = {};
  let resultList = new SLL();
  let currentNode = arr.head;
  while (currentNode) {  //Big O is O(n)
    table[currentNode.value] = true;
    currentNode = currentNode.next;
  }
  currentNode = arr1.head;
  while (currentNode) {  //Big O is O(n)
    if (table[currentNode.value]) {
      resultList.insertEnd(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  console.log(resultList);
  return resultList;
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
    expect(doThing.findMatch()).toBe(null);
  });
  ```
this is checking to make sure the right thing is passed in with the correct amout of them, this case a string
##test 2
```javascript
it('checks to see what was passed in in not a string', function() {
    expect(doThing.findMatch('pizza', test)).toBe(null);
    expect(doThing.findMatch('pizza')).toBe(null);
  });
  ```
this is checking to make sure the right thing is passed in, this case a number
  ##test 3
```javascript
it('checks to see if was passed in is not a number', function() {
    expect(doThing.findMatch(173)).toBe(null);
  });
  ```
this is checking to see if we get what we wanted and make sure we dont get the wrong answer as well.
  ##test 4
```javascript
it('checks to see if its the right answer', function() {
    expect(doThing.findMatch(test, test1)).toEqual(answer);
    expect(doThing.findMatch(test, test1)).not.toEqual(wrong);
  });
  ```