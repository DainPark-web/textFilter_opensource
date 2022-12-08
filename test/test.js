'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
  it('should return Boys', () => {
    var result = index.sayName('Boy');
    expect(result).to.equal('Boy');
  })

})