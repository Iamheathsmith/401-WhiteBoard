
# whiteBoard 10

### problem domain

`Write a function called dedupe(head) that accepts the head of a linked list as it's argument, and returns a new linked list - Use a stack to identify any consecutive duplication, and remove them from the list.`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-14`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
SLL {
  head: Node { value: 1, next: Node { value: 2, next: [Node] } },
  size: 5 }
```
we have this dummy test set of data that looks like this(below) and you can see that we have 9 items in a SLL, the functions kicks off a removes all dups and returns a SLL with just the singles.  that is why the SLL above has a total size of 5.

```javascript
let test = new SLL();
test.insertEnd(1); //1
test.insertEnd(1); //2 //remove
test.insertEnd(2); //3
test.insertEnd(3); //4
test.insertEnd(3); //5 //remove
test.insertEnd(4); //6
test.insertEnd(4); //7 //remove
test.insertEnd(5); //8
test.insertEnd(5); //9 //remove
```

### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
doThing.dedupe = function(arr) { //The Big O is O(3n)
  if (!arr || typeof arr == 'string' || typeof arr == 'number' || Array.isArray(arr)) return null;
  let stack = new Stack();
  let sll = new SLL();
  let cur = arr.head;
  while (cur.next) {
    if (cur.value !== cur.next.value) {
      stack.push(cur.value);
      cur = cur.next;
    } else {
      cur = cur.next;
    }
  }
  stack.push(cur.value);
  while (stack.size > 0) {
    sll.insertHead(stack.pop().value);
  }
  return sll;
};
```

### big O is.......
big O time is O(n2);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

##test 1
this is chcking to see if anything is passed into the arguments
```javascript
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.dedupe()).toBe(null);
  });
  ```
this is checking to make sure the right thing, in this case its a string, number and a array.
##test 2
```javascript
 it('checks to see if the right item are passed in.', function() {
    expect(doThing.dedupe(1)).toBe(null);
    expect(doThing.dedupe([])).toBe(null);
    expect(doThing.dedupe('test')).toBe(null);
  });
  ```
this is checking to make sure if we are getting the right answer
  ##test 3
```javascript
 it('checks to see if its the right answer', function() {
    expect(doThing.dedupe(testData)).toEqual(answer);
  });
  ```
this is checking to see if we pass a SLL that we dont get the same SLL back out.
  ##test 4
```javascript
 it('checks to see if if does not return the same SLL', function() {
    expect(doThing.dedupe(testData)).not.toEqual(testData);
  });
  ```