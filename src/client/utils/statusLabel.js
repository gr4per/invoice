const _ = require('lodash');

/**
 * Finds correct status description with fallbakc to statusId
 *
 * @param statuses
 * @param statusId
 * @return {string}
 */
module.exports = (statuses, statusId) => {
  let status = _.find(statuses, { statusId: statusId });
  return status ? status.description : statusId;
};
