const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `https://dev-519458.okta.com/oauth2/default`,
    assertClaims: {
        aud: 'api://default'
    }
});

module.exports = oktaJwtVerifier;
