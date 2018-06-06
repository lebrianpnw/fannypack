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

describe('Fannypack List Postcard Result', function () {
	this.enableTimeouts(false)

	var requestResult;
	var response;
		 
    before(function(done) {
        chai.request("http://localhost:8080")
			.get("/app/postcards")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
            console.log(res.request.url);
			done();
			});
	});

    it('Should return an array object with 12 objects', function (){
        expect(response).to.have.status(200);
        expect(response.body).to.have.length(12);
        expect(response).to.have.headers;
    });

    it('The first entry in the array has known properties', function(){
        expect(requestResult[0]).to.include.keys('postcardID');
        expect(requestResult[0]).to.have.property('userID', 123);
        expect(requestResult[0]).to.have.property('title', 'Coffee at Starbucks Reserve');
        expect(requestResult[0]).to.have.property('imageURL', 'assets/images/popDestinations/1.jpg');
        expect(requestResult[0]).to.have.property('description', 'The reserve was a really great place to enjoy some of Starbuck\'s best coffee! I really recommend anyone visiting the city to check this place out!');
        expect(requestResult[0]).to.have.property('rating', 5);
        expect(requestResult[0]).to.have.property('cost', 2);
        expect(requestResult[0]).to.have.property('activityLocation', 'Starbucks Reserve');
        expect(requestResult[0]).to.have.property('activityCity', 'Seattle');        
    });


it('The elements in the array have the expected properties', function(){
    expect(response.body).to.satisfy(
        function (body) {
            for (var i = 0; i < body.length; i++) {
                expect(body[i]).to.have.property('postcardID');
                expect(body[i]).to.have.property('userID');
                expect(body[i]).to.have.property('title');
                expect(body[i]).to.have.property('imageURL');
                expect(body[i]).to.have.property('description');
                expect(body[i]).to.have.property('rating');
                expect(body[i]).to.have.property('cost');
                expect(body[i]).to.have.property('activityLocation');
                expect(body[i]).to.have.property('activityCity');
            }
            return true;
            done();
        });
    });	
});