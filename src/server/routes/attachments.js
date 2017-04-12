const _ = require('lodash');
const ENDPOINT_VASE_URl = '/api/attachments';
const fs = require('fs');
const path = require('path');


/**
 * Endpoint for getting file from workarea by relative path (/api/attachments/<WA_relative_path>)
 *
 * @param app - express instance
 * @param db - sequelize instance
 * @param workareaDir - configured wirkaread dir
 */
module.exports = function(app, db, workareaDir) {
  app.get(ENDPOINT_VASE_URl+'/*', (req, res) => {
    let workareaRelativePath = req.originalUrl.substring(
      ENDPOINT_VASE_URl.length,
      req.originalUrl.length
    );

    let p = path.join(__dirname, '');
    if(fs.exists(p)){
      res.sendFile(workareaRelativePath, {root: workareaDir});
    } else {
      res.send(p);
    }
  });
};
