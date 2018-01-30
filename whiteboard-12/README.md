
# whiteBoard 12

### problem domain

`Implement a Queue using only two Stacks`

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-12`. once there, install NPM but typing in , `nmp install`. after that you need to install JEST and eslint which is done with `npm install -D jest eslint`. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 1
```

this will sent off the function and it will build 2 stacks(one called inbox, and the other called outbox) we will then push 2 items into the inbox stack and this is what it should look like.

```javascript
{ inbox: Stack { top: Node { value: 2, next: [Node] }, maxSize: 1048, size: 2 },
  outbox: Stack { top: null, maxSize: 1048, size: 0 } }
```


do the same thing again but with the number 2 to see that we then move all the items to the outbox and remove the last item in the outbox stack which is will be the node with the value of 1.
```javascript
node index.js 2
```

this is what you will see. here you can see the inbox size is now 0 and the outbox size is only 1 and the value is 2, which was the last input we had in the inbox.

```javascript
{ inbox: Stack { top: null, maxSize: 1048, size: 0 },
  outbox: Stack { top: Node { value: 2, next: null }, maxSize: 1048, size: 1 } }
```

do the same thing again but with the number 3.  here we will remove the the last node with the value of 2 in the outbox.
```javascript
node index.js 3
```

this is what you will see. now both the inbox and outbox have no size to them.

```javascript
{ inbox: Stack { top: null, maxSize: 1048, size: 0 },
  outbox: Stack { top: null, maxSize: 1048, size: 0 } }
```


### what is happening.
when you run this in the termial
```javascript
node index.js
```

you are running this function 

```javascript
module.exports = class {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    if (!value) return null;
    this.inbox.push(value);
  }

  dequeue() {
    if (this.outbox.size === 0) {
      while (this.inbox.size > 0) {
        this.outbox.push(this.inbox.pop().value);
      }
    }
    return this.outbox.pop();
  }
};
```

### big O is.......
big O time is O(n);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
 `solution.test.js` is the file that we use for testing.

##test 1
this is chcking to see if anything is passed into the arguments
```javascript
it('checks to see if anything is passed into the enqueue() function', function() {
    let test = new doThing();
    test.enqueue();
    expect(test.enqueue()).toBe(null);
  });
  ```
this is checking to make sure the right stack size is in both stacks.
##test 2
```javascript
it('checks to see if we get the right stack size when we add and remove.', function() {
    let test = new doThing();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.dequeue();
    expect(test.outbox.size).toBe(2);
    expect(test.inbox.size).toBe(0);
  });
  ```
this is checking to make sure if we are getting the right answer and the stack is the right size in the inbox.
  ##test 3
```javascript
it('checks to see if the right value is in the outbound stack and the inbox stack in empty.', function() {
    let test = new doThing();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.dequeue();
    expect(test.outbox.top.value).toBe(2);
    expect(test.inbox.top).toBe(null);
  });
  ```