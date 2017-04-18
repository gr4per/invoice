import validate from 'validate.js';
import _ from 'lodash';

/**
 * Returns function to validate redux form based on passed constraints
 *
 * @param formConstraints - constraints
 * @return {function}
 */
export const validateForm = (formConstraints) => {
  return (values) => {
    const validationResult = {};
    _.forEach(validate(values, formConstraints), (value, key) => {
      _.set(validationResult, key, value[0])
    });
    return validationResult;
  }
};
