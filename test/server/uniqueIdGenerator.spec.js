'use strict';

const assert = require('assert');
const uniqueIdGenerator = require('../../src/server/utils/uniqueIdGenerator');

/**
 * Unit tests for uniqueIdGenerator
 */
describe("uniqueIdGenerator", () => {
  it("tests concatenating values", () => {
    assert(uniqueIdGenerator('INV', 1) === 'INV_1');
  });

  it("tests returning different values from different seeds", () => {
    assert(uniqueIdGenerator('INV', 1) !== uniqueIdGenerator('INV', 2));
    assert(uniqueIdGenerator('INV', 3) !== uniqueIdGenerator('INV', 4));
  });
});
