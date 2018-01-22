
# whiteBoard 6

### problem domain

 we need a funtion that will take a input(value) and a call back and call it self that many times.

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `whiteBoard-6`. once there, install NPM but typing in , `nmp install`, and you need to do a `npm init`. after that you need to install JEST which is done with `npm install -D jest`. this will install the testing package

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js
```

once here you can type in any number after that and it will then put that number in the function and then execute it that many times. the code that will be running is this

example of what to type
```
node index.js 4
```

this will execute the function below 4 times.

```javascript
doThing.loop = function(val, callback) {
  if(!val || val < 1 ||typeof val !== 'number') return null;
  let testVal = Math.ceil(val);
  let counter = 0;
  if(typeof testVal === 'number') {
    for(let i = counter; i < testVal; i++) {
      console.log('i have ran ' + counter + ' times');
      counter++;
    }
    console.log('i have ran a total of ' + counter + ' times');
    return counter;
  }
  callback(null);
  doThing.loop(testVal, callback);
};
```
your console log should look like this

```i have ran 0 times
i have ran 1 times
i have ran 2 times
i have ran 3 times
i have ran a total of 4 times
```

### Testing

To run the tests for this function, type `nmp run test` in your terminal.
