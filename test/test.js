const assert = require('assert');

const changeSize = require('../src/index');
const changeSlideRight = require('../src/index');
const changeSlideLeft = require('../src/index');
const searchFunc = require('../src/index');

const countPage = 0;
const nextPage = false;

describe('searchFunc', () => {
  it('should return 200 value ', () => {
    searchFunc();
    assert(nextPage, true);
  });
});

describe('changeSize', () => {
  it('should value 1', () => {
    changeSize();
    assert.equal(countPage, 1);
  });
});

describe('changeSlideRight', () => {
  it('should value +1', () => {
    changeSlideRight();
    assert.equal(countPage, 1);
  });
});

describe('changeSlideLeft', () => {
  it('should value -1', () => {
    changeSlideLeft();
    assert.equal(countPage, -1);
  });
});
