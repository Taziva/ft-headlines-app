var mongo  = require('mongodb');
var monk   = require('monk');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

describe('Financial Times Headlines', function() {

    var db_test;
    var headlines;
    var data;

    beforeEach(function() {
        db_test = monk('localhost:27017/ft-headlines-test');
        headlines = db_test.get('headlinescollection');

        data = {
          apiUrl: 'http://www.ftfake.com',
          title: { title: 'Things happen' },
          location: { uri: 'http://www.ftfake.com' },
          summary: { excerpt: 'Some things Happenned' } };
    });

    afterEach(function() {
        return headlines.remove();
    });


    describe('Connecting to the database', function() {
        it('should connect to the testing database', function(done) {
            should.exist(db_test);
            done();
        });
        it('has a collection called headlinescollection', function(done) {
            should.exist(headlines);
            done();
        });
    });

    describe('Adding to the database', function() {
        it('can add a headline to the headlinescollection', function(done) {
          this.timeout(5000)
            headlines.insert(data, function(err, insertion) {
                if (err) return done(err);
                should.exist(insertion);
                done();
            });
            headlines.find({}, function(err, docs){
                docs.should.have.length(1);
            });
    });
});
});
