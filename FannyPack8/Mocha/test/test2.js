var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();


var http = require('http');
chai.use(chaiHttp);

if (!global.Promise) {
  var q = require('q');
  chai.request.addPromises(q.Promise);
}

describe('Fannypack Single Postcard Result', function () {
	this.enableTimeouts(false)

	var requestResult;
	var response;
		 
    before(function(done) {
        chai.request("http://localhost:8080")
			.get("/app/postcards/1")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
            console.log(res.request.url);
			done();
			});
	});

    it('Should return an object', function (){
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.have.headers;
    });

    it('The entry has known properties', function(){
        expect(requestResult).to.include.keys('postcardID');
        expect(requestResult).to.have.property('userID', 123);
        expect(requestResult).to.have.property('title', 'Coffee at Starbucks Reserve');
        expect(requestResult).to.have.property('imageURL', 'assets/images/popDestinations/1.jpg');
        expect(requestResult).to.have.property('description', 'The reserve was a really great place to enjoy some of Starbuck\'s best coffee! I really recommend anyone visiting the city to check this place out!');
        expect(requestResult).to.have.property('rating', 5);
        expect(requestResult).to.have.property('cost', 2);
        expect(requestResult).to.have.property('activityLocation', 'Starbucks Reserve');
        expect(requestResult).to.have.property('activityCity', 'Seattle');  
    });


    it('The entry has expected properties', function(){
        expect(requestResult).to.include.keys('postcardID');
        expect(requestResult).to.have.property('userID');
        expect(requestResult).to.have.property('title').that.is.a('string');
        expect(requestResult).to.have.property('imageURL').that.is.a('string');
        expect(requestResult).to.have.property('description').that.is.a('string');
        expect(requestResult).to.have.property('rating');
        expect(requestResult).to.have.property('cost');
        expect(requestResult).to.have.property('activityLocation').that.is.a('string');
        expect(requestResult).to.have.property('activityCity').that.is.a('string'); 
    });	
});