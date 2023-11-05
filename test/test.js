var request = require('supertest');
var app = require('../app.js');
describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{"message":"Okay, I will do that."}', done);
    });
});