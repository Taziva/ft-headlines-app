// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../app');
// let should = chai.should();
// var expect = require("chai").expect;
// require(__dirname + "/../public/javascripts/getData.js")
// var sinon = require('sinon');
//
//
// describe("Getting the Data", function(){
//   describe("#retrieveData",function(){
//     var url = "http://localhost:3000/"
//
//     beforeEach(function() {
//     global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
//     this.xhr = sinon.useFakeXMLHttpRequest();
//     var requests = this.requests = [];
//     this.xhr.onCreate = function (xhr) {
//       requests.push(xhr);
//     };
//   });
//
//   afterEach(function() {
//     this.xhr.restore();
//   });
//
//
//   it('should parse fetched data as JSON', function(done) {
//   var data = { foo: 'bar' };
//   var dataJson = JSON.stringify(data);
//   getData(function(err, result) {
//       result.should.deep.equal(data);
//       done();
//   });
//
//   this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
// });
// it('should parse fetched data as JSON', function(done) {
// getData(function(err, result) {
//     err.should.deep.equal(404);
//     result.should.deep.equal("failure");
//     done();
// });
//
// this.requests[0].respond(404);
// });
//   })
// })
