'use strict';

const assert = require('assert');
const statusLabel = require('../../src/client/utils/statusLabel');

console.log(statusLabel);

/**
 * Unit tests for status lable calculation
 */
describe("statusLabel", () => {
  const statuses = [
    { statusId: 'testId0', description: "test_descriptions_0" },
    { statusId: 'testId1', description: "test_descriptions_1" }
  ];

  it("testing correct label calculation", () => {
    assert(statusLabel(statuses, 'testId0') === 'test_descriptions_0');
    assert(statusLabel(statuses, 'testId1') === 'test_descriptions_1');
  });

  it("testing fallback calculation ", () => {
    assert(statusLabel(statuses, 'testId3') === 'testId3');
  });
});
