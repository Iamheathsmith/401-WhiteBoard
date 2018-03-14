
# whiteBoard 26


### problem domain

`Write a function while takes two arguments, a base number and an exponential, and returns the sum of the return value's digits.`

For example: fn(2, 15) => 32768 => 26


---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-25`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 

---
### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result

```javascript
your totel sum of the exponential is 26
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
  mathStuff(arr, arr2) {
    if(!arr || !arr2 || typeof arr !== 'number' || typeof arr2 !== 'number' || !Number.isInteger(arr) || !Number.isInteger(arr2)) return null;
    let large = Math.pow(arr, arr2);
    large = large.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    return large;
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
    expect(doThing.mathStuff()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing.mathStuff('string', 3)).toBe(null);
    expect(doThing.mathStuff([], 3)).toBe(null);
  });
  it('checks to see if the number is a whole number', function() {
    expect(doThing.mathStuff(4.5, 5)).toBe(null);
  });
  it('checks to see if we are returning the right number', function() {
    expect(doThing.mathStuff(2, 15)).toEqual(26);
    expect(doThing.mathStuff(2, 2)).toEqual(4);
  });
  it('checks to see if we are doing things right.', function() {
    expect(doThing.mathStuff(2, 2)).not.toEqual(6);
  });
});
```


