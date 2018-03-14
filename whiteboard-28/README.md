
# whiteBoard 28


### problem domain

`Write a function takes a Binary Tree as it's argument and returns a sorted linked list`


---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-27`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 

---
### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result if it matches

```javascript
node index.js
```
you will get this back 
```javascript
SLL {
  head: Node { value: 1, next: Node { value: 2, next: [Node] } },
  size: 4 }
```

### what is happening.
it takes a binaryTree and and removes all the values from the node, added them to an array and sorts them and then removes the 0 index of the array and places that in a SLL.

---
### the function

```javascript
 treeToSll(arr) {
    if(!arr || typeof arr === 'string' || typeof arr === 'number') return null;
    let sll = new SLL();
    arr.inOrderTraversal();
    let test = arr.inOrd.sort((a, b) => b - a);
    while (test.length > 0) {
      sll.insertHead(test.shift());
    }
    return sll;
  }
```
---
### big O is.......

* big O time is O(n);

---
### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

---
## tests

#### TEST TEST TEST!!!!

```javascript
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.treeToSll()).toBe(null);
  });
  it('checks to see that no string is passed in.', function() {
    expect(doThing.treeToSll('string')).toBe(null);
  });
  it('checks to see that no number is passed in.', function() {
    expect(doThing.treeToSll(8)).toBe(null);
  });
  it('checks to see if we are getting a true of false ', function() {
    expect(doThing.treeToSll(binaryTree)).toEqual(answer);  
  });
```


