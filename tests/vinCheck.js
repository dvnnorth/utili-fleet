//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const assert = chai.assert;

chai.use(chaiHTTP);

describe('Tests for /api/vinCheck route:', () => {
  it('should return the VIN results for VIN 1FTFW1EV6AFB45013', () => {

    chai.request(server)
      .get('/api/vinCheck/1FTFW1EV6AFB45013')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res, require('./testData.json')[0]);
      });
  });

  it('should return first charachter of the string', () => {
    assert.equal("Hello".charAt(0), 'H');
  });
});