'use strict';

/**
 * Simplest implementation of unique id generator, e.g.
 * <prefix>_<seed>
 * TODO: create more generic & complicated implementation on future
 *
 * @param prefix
 * @param seed
 * @return {string}
 */
module.exports = function(prefix, seed) {
  return `${prefix}_${seed}`;
};
