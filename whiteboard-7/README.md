
# whiteBoard 7

### problem domain

 we need a funtion that will take a input(SLL) and determine if its a circular or not. if it is circular, return true... if not, return false.

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-7`. once there, install NPM but typing in , `nmp install`, and you need to do a `npm init`. after that you need to install JEST which is done with `npm install -D jest`. this will install the testing package

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js
```

once here you can type in any number after that and it will then put that number in the function and then execute it that many times. the code that will be running is this

example of what to type
```javascript
node index.js loop
```
and you should see this 
`true`
 and for 
 ```javascript
node index.js norm
```
you should see 
`false`

###what is happening.
this will execute the function below with the hard coded SLL for testing.

`let obj = {head: {value: 1, next: {value: 3, next: {value: 6, next: null}}}};`
`let obj2 = {head: {value: 1, next: {value: 3, next: this.head}}};`

here is the function

```javascript
doThing.testNode = function(arr) {
  if (!arr || typeof arr === 'string' || typeof arr === 'number' ) return null;
  let newObj = Object.assign({}, arr);
  while (newObj.head) {
    newObj = newObj.head;

    while (newObj.next) {
      newObj = newObj.next;
      if (newObj.next === newObj.head) {
        console.log(true);
        return true;
      }
      console.log(false);
      return false;
    }
  }
};
```

### Testing

To run the tests for this function, type `nmp run test` in your terminal.

##test 1
this is chcking to see if anything is passed into the arguments
```javascript
it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.testNode()).toBe(null);
  });
  ```
this is checking to make sure the right thing is passed in, this case a string
##test 2
```javascript
it('checks to see what was passed in in not a string', function() {
    expect(doThing.testNode('pizza')).toBe(null);
  });
  ```
this is checking to make sure the right thing is passed in, this case a number
  ##test 3
```javascript
it('checks to see if was passed in is not a number', function() {
    expect(doThing.testNode(173)).toBe(null);
  });
  ```
this is checking to see if we get a `false` if it does not loop
  ##test 4
```javascript
it('checks to see if it finds the end of of a SLL', function() {
    expect(doThing.testNode(obj)).toBe(false);
  });
  ```
this is checking to see if we get a `true` if it does loop
  ##test 5
```javascript
it('checks to see if the SLL is circular', function() {
    expect(doThing.testNode(obj2)).toBe(true);
  });
  ```