// Simple test using supertest to check if the home page is accessible and returns the correct status code.
// https://github.com/forwardemail/supertest

const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('pathing test', function() {
  it('should return the home page', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });

  it('should return 404 for non-existent page', function(done) {
    request(app)
      .get('/not-found')
      .expect(404)
      .end(done);
  });
});

