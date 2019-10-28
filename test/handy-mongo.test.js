'use strict';

const mock = require('egg-mock');

describe('test/handy-mongoql.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/handy-mongoql-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, handyMongoql')
      .expect(200);
  });
});
