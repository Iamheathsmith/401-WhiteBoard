
# whiteBoard 15

### problem domain

`Write a function that accepts the root of a tree as it's argument, and returns an array of nodes, if any, which have no children.`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-15`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
[ TreeNode { val: 3, children: [] },
  TreeNode { val: 2, children: [] },
  TreeNode { val: 1, children: [] } ]
```
we have this dummy test set of data that looks like this(below) and you can see that we have 9 items in a SLL, the functions kicks off a removes all dups and returns a SLL with just the singles.  that is why the SLL above has a total size of 5.

```javascript
let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5);
test.insert(2,4); //last leaf
test.insert(3,15); //last leaf
test.insert(1,4); //last leaf
```

### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
doThing.childLess = function(root) {
  if (!root || typeof root === 'number' || typeof root === 'string') return null;
  let noChildren = [];
  root.breadthFirst(current => {
    if(current.val.children.length === 0) {
      noChildren.push(current.val);
    }
  });
  return noChildren;
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
    expect(doThing.childLess()).toBe(null);
  });
  ```
this is checking to make sure the right thing, in this case its a string or a number.
##test 2
```javascript
 it('checks to see if the right items are passed in.', function() {
    expect(doThing.childLess(1)).toBe(null);
    expect(doThing.childLess('test')).toBe(null);
  });
  ```
this is checking to make sure if we are getting the right answer
  ##test 3
```javascript
 it('checks to see if its the right answer is given', function() {
    expect(doThing.childLess(test)).toEqual(answer);
    expect(doThing.childLess(test2)).toEqual(answer2);
  });
  ```
this is checking to see if we pass a TREE that we dont get the same TREE back out.
  ##test 4
```javascript
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.childLess(test)).not.toEqual(test);
  });
  ```