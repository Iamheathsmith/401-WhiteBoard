
# whiteBoard 17

### problem domain

`Write a function that accepts a Tree and returns the total sum of all the elements in the tree. - You are to assume that each node will have a val property which has a numeric value. - Any other data points, aside from children are irrelevant.`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-16`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```

this will sent off the function with a preset SLL that are in the index.js page. you should get this back. in your termial.

```javascript
TreeNode {
  val: 4,
  children:
   [ TreeNode { val: 2, children: [] },
     TreeNode { val: 1, children: [] },
     TreeNode { val: 3, children: [] } ] }
```
we have this dummy test set of data that looks like this(below) and you can see that we have 9 items in a SLL, the total of all the nodes value is 30.

```javascript
let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5); //node with most children
test.insert(2,4); 
test.insert(3,15); 
test.insert(1,4); 
test.insert(3,4); 
```

### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
doThing.findMaxChild = function(root) {
  if(!root || typeof root === 'string' || typeof root === 'number' ) return null;
  let maxChild = root.root;
  
  root.breadthFirst(current => {

    if(current.val.children.length > maxChild.children.length) {
      maxChild = current.val;
    }
  });
  return maxChild ;
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
    expect(doThing.findMaxChild()).toBe(null);
  });
  ```
this is checking to make sure the right thing, in this case its a string or a number.
##test 2
```javascript
 it('checks to see if the right items are passed in.', function() {
    expect(doThing.findMaxChild(1)).toBe(null);
    expect(doThing.findMaxChild('test')).toBe(null);
  });
  ```
this is checking to make sure if we are getting the right answer
  ##test 3
```javascript
 it('checks to see if its the right answer is given', function() {
    expect(doThing.findMaxChild(test)).toEqual(test.root.children[1]);
  });
  ```
this is checking to see if we pass a TREE that we dont get just the root starting point.
  ##test 4
```javascript
 it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.findMaxChild(test)).not.toEqual(test.root.val);
  });
  ```