process.env.ENV_NODE = "test"
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();


chai.use(chaiHttp);


describe('Index', function() {
  it('should list ALL headlines /',function(){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });
  it('should add headlines on /headlines POST', function(done) {
    this.timeout(5000);
  chai.request(server)
    .post('/headlines')
    .send()
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body[0].should.be.an('object');
      res.body[0].should.have.property('title');
      res.body[0].should.have.property('location');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('summary');
      res.body[0].summary.should.have.property('excerpt');
      res.body[0].title.should.have.property('title');
      done();
    });
  });
  it('should get headlines', function(done) {
    this.timeout(5000);

    chai.request(server)
    .get('/headlines')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body[0].should.be.an('object');
      res.body[0].should.have.property('title');
      res.body[0].should.have.property('location');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('summary');
      res.body[0].summary.should.have.property('excerpt');
      res.body[0].title.should.have.property('title');
      done();
    });
  });
  it('should headlines on /headlines POST', function(done) {
    this.timeout(5000);
  chai.request(server)
    .get('/search?search=brexit')
    .send()
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });
  it('should return json on /search POST', function(done) {
    this.timeout(5000);
  chai.request(server)
    .post('/search')
    .send()
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body[0].should.be.an('object');
      res.body[0].should.have.property('title');
      res.body[0].should.have.property('location');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('summary');
      res.body[0].summary.should.have.property('excerpt');
      res.body[0].title.should.have.property('title');
      done();
    });
  });

});
