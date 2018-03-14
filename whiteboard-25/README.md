
# whiteBoard 24


### problem domain

`Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively`

ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

ex: fib(4) === 3

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-24`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 

---
### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result

```javascript
your total is 8
your total is 8
```

---
### what is happening.
when you run this in the termial
```javascript
node index.js 
```
---
### iteratively function

```javascript
  fib(arr){
    if(!arr || typeof arr !== 'number' || !Number.isInteger(arr)) return null;
    let indexVal = 0, total = 0, temp;
  
    while (arr >= 0){
      temp = indexVal;
      indexVal = indexVal + total;
      total = temp;
      if(total === 0) {
        indexVal = 1;
      }
      arr--;
    }
    return total;
  }
```
---
### big O is.......

* big O time is O(n);

---
### recursively function

```javascript
  const thing = module.exports = function(arr) {
  if(!arr || typeof arr !== 'number' || !Number.isInteger(arr)) return null;
  if (arr <= 2) return 1;
  
  return thing(arr - 1) + thing(arr - 2);
};
```
---
### big O is.......

* big O time is O(2^n);

---
### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

---
### why iteratively is better then recursively 
with iteratively, you only have to do one loop, but while you do the recursively, its doing the loop twice as much. so you bigO time goes to crap.

---
## tests

#### iteratively tests

```javascript
describe('#solution module', function() {

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.fib()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing.fib('string')).toBe(null);
    expect(doThing.fib([])).toBe(null);
  });
  it('checks to see if the number is a whole number', function() {
    expect(doThing.fib(4.5)).toBe(null);
  });
  it('checks to see if we are returning the right number', function() {
    expect(doThing.fib(4)).toEqual(3);
    expect(doThing.fib(1)).toEqual(1);
    expect(doThing.fib(10)).toEqual(55);
  });
  it('checks to see if we are doing things right.', function() {
    expect(doThing.fib(3)).not.toEqual(6);
  });
});
```


#### recursively tests

```javascript
describe('#solution module', function() {

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing('string')).toBe(null);
    expect(doThing([])).toBe(null);
  });
  it('checks to see if the number is a whole number', function() {
    expect(doThing(4.5)).toBe(null);
  });
  it('checks to see if we are returning the right number', function() {
    expect(doThing(4)).toEqual(3);
    expect(doThing(1)).toEqual(1);
    expect(doThing(10)).toEqual(55);
  });
  it('checks to see if we are doing things right.', function() {
    expect(doThing(3)).not.toEqual(6);
  });
});
```


