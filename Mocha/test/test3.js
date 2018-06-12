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

describe('Fannypack Single Postcard POST Result', function () {
	this.enableTimeouts(false)

	var requestResult;
    var response;
		 
    before(function(done) {
        chai.request("http://localhost:8080")
			.post("/app/postcards/")
            .send({postcardID: '600', owner: 'lebrianpnw@gmail.com', userID: 25, title: 'Test', imageURL: 'assets/images/popDestinations/12.jpg', 
            description: 'Testing', rating: 5, cost: 25, activityLocation: 'Seattle Museum',
            activityCity: 'Seattle'})
			.end(function (err, res) {
				requestResult = res.body.jsonObj;
				response = res;
            console.log(res.request.url);
            console.log(requestResult);
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
        expect(requestResult).to.have.property('owner', 'lebrianpnw@gmail.com');
        expect(requestResult).to.have.property('userID', 25);
        expect(requestResult).to.have.property('title', 'Test');
        expect(requestResult).to.have.property('imageURL', 'assets/images/popDestinations/12.jpg');
        expect(requestResult).to.have.property('description', 'Testing');
        expect(requestResult).to.have.property('rating', 5);
        expect(requestResult).to.have.property('cost', 25);
        expect(requestResult).to.have.property('activityLocation', 'Seattle Museum');
        expect(requestResult).to.have.property('activityCity', 'Seattle');  
    });


    it('The entry has expected properties', function(){
        expect(requestResult).to.include.keys('postcardID');
        expect(requestResult).to.have.property('owner').that.is.a('string');
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