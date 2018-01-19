'use strict';

const doThing = require('../lib/solution.js');

describe('#solution module', function() {
  let sll =
  {value: 7,
    next:{ value: 3,
      next:{ value: 3,
        next: null},
    },
  };
  let answer =
  { value: 3,
    next: {value: 3,
      next: null},
  };
  let tooBig =
  {value: 7,
    next:{ value: 3,
      next:{ value: 3,
        next:{ value: 3,
          next: null},
      },
    },
  };
  let tooBigAns = {value: 3,
    next:{ value: 3,
      next:{ value: 3,
        next: null},
    },
  };
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMid()).toBe(null);
  });
  it('checks to see if what was passed is an object', function() {
    expect(doThing.findMid(994)).toBe(null);
  });
  it('checks to see if the right answer is been passed', function() {
    expect(doThing.findMid(sll)).toEqual(answer);
  });
  it('checks to see if even number is passed in, if so give middle - 1', function() {
    expect(doThing.findMid(tooBig)).toEqual(tooBigAns);
  });
});
