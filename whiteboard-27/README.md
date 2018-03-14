
# whiteBoard 26


### problem domain

`Write a function which takes two binary search trees as arguments, and compares them for structural likeness.`

`If they are structurally identical, return true`
`Else return false`




---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-26`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 

---
### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result if it matches

```javascript
true 
```
```javascript
false
```

---
### what is happening.
when you run this in the termial
```javascript
node index.js 
```
---
### the function

```javascript
isMatched(arr, arr2) {
    if(!arr || !arr || typeof arr === 'string' || typeof arr2 === 'string') return null;
    arr.inOrderTraversal();
    arr2.inOrderTraversal();
    
    if (arr.match.toString() !== arr2.match.toString()) {
      return false;
    } else {
      return true;
    }
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
### why iteratively is better then recursively 
with iteratively, you only have to do one loop, but while you do the recursively, its doing the loop twice as much. so you bigO time goes to crap.

---
## tests

#### TEST TEST TEST!!!!

```javascript
describe('#solution module', function() {
 it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.isMatched()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing.isMatched('string', 3)).toBe(null);
    expect(doThing.isMatched('string', binaryTree)).toBe(null);
  });
  it('checks to see if we are getting a true of false ', function() {
    expect(doThing.isMatched(binaryTree, mockTree)).toBe(true);
    expect(doThing.isMatched(binaryTree, mockTree2)).toBe(false);
  });
```


