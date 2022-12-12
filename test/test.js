'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
  it('should return 3', () => {
    var result = new index.textFilter('I love you');
    expect(result.getWords().words.length).to.equal(3);
  })
  it('should return I', () => {
    var result = new index.textFilter('I love you');
    expect(result.getWords().words[0]).to.equal("I");
  })

})