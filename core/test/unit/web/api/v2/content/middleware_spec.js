const should = require('should');
const middleware = require('../../../../../../server/web/api/v2/content/middleware');

describe('Content Api v2 middleware', function () {
    it('exports an authenticatePublic middleware', function () {
        should.exist(middleware.authenticatePublic);
    });

    describe.skip('authenticatePublic', function () {
        it('uses brute content api middleware as the first middleware in the chain', function () {
            const firstMiddleware = middleware.authenticatePublic[0];
            const brute = require('../../../../../../server/web/shared/middlewares/brute');

            should.equal(firstMiddleware, brute.contentApiKey);
        });
    });
});
