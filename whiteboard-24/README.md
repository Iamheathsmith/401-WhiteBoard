
# whiteBoard 24

### problem domain

`Given two arrays, write a function to compute their intersection`

example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

below is our test string
```javascript
let test = [1,2,4,5,6];
let test2 = [7,8,4,9,4,0,11];
```

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-23`. once there, install NPM but typing in , `nmp i`. after that you need to install JEST and eslint which is done with `npm i -D `. 


### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
you should see this as a result

```javascript
[ '4' ]
```


### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
  findMatch(arr1, arr2) {
    if (!arr1 || !arr2 ) return null;
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
    let test = [];
    let test2 = [];
    let hash = new Hash(5)
    for (let i = 0; i < arr1.length; i++) {
      let index = hash.hashKey(arr1[i]);
      test.push(index);
      }
    for (let i = 0; i < arr2.length; i++) {
      let index2 = hash.hashKey(arr2[i]);
      test2.push(index2);
    }
    
    let temp = test.filter((n) => test2.includes(n));
    let final = temp.filter((val, i, final) => {
      if (final.indexOf(val) === i) {
        return val
      }
    })
    if (final.length < 1 ) return 'no matching pairs';

    return final;
  };
```

### big O is.......
big O time is O(n);

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `solution.test.js` file that we use for testing.

##tests

check to see if somethingis passed in

```javascript
it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMatch()).toBe(null);
  });
```

check to see if the right thing is passed in.

```javascript
it('checks to see if only one array is passed into the function', function() {
    expect(doThing.findMatch(test)).toBe(null);
  });
```

checks to see if the right type of data was given
```javascript
it('checks to see if both items passed in are arrays', function() {
    expect(doThing.findMatch(test, 4)).toBe(null);
    expect(doThing.findMatch('string', test)).toBe(null);
  });
```

checks to see if the right answer is given

```javascript
  it('checks to see if we are returning only matching', function() {
    expect(doThing.findMatch(test, test2)).toEqual(answer);
  });
```

checks to see if no matching pairs was possible. 

```javascript
 it('checks to see if we are returning only matching', function() {
    expect(doThing.findMatch(test, test3)).toEqual('no matching pairs');
  });
```

