/* eslint-disable */
import { expect } from 'chai';
import { calculateTotalSum } from './MathUtils';

const i18n = {
  parseDecimalNumber: (number) => {
    return number
  }
};

const notNullItems = [
  {
    testField: 1.1
  },
  {
    testField: 2.2
  },
  {
    testField: 0
  }
];

const partiallyNullItems = [
  {
    testField: 1.1
  },
  {
    testField: undefined
  },
  {
    testField: 0
  }
];

const invalidOrNullItems = [
  {
    testField: undefined
  },
  {
    testField: null
  },
  {
    testField: NaN
  }
];

describe("MathUtils", () => {
  it('Test for calculateTotalSum', () => {
    expect(calculateTotalSum(i18n, notNullItems, 'testField')).to.equal(3.3);
    expect(calculateTotalSum(i18n, partiallyNullItems, 'testField')).to.equal(1.1);
    expect(calculateTotalSum(i18n, invalidOrNullItems, 'testField')).to.be.NaN;
  })
});
