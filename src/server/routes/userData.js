'use strict';

/**
 * Endpoint that returns user assignment got via gwt token and spread via
 * useridentity provider middleware
 * {
 * iat: '1491807120',
 * iss: 'http://localhost:8080',
 * email: 'scott.tiger@example.com',
 * sid: '2cf16539-fa48-4f8b-889e-6afd3fe78e0a',
 * sub: 'scott.tiger@example.com',
 * exp: '1491814320',
 * at_hash: 'x6lnVF6XfZ5TjsWyuwDSGw',
 * phoneno: 'userdata: NULL',
 * aud: 'oidcCLIENT',
 * nonce: 'f223ede1e35935f58c65be23aa7422f1',
 * username: 'scott.tiger@example.com'
 * }
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/currentUserData', (req, res) => {
    res.json(req.opuscapita.userData());
  });
};
