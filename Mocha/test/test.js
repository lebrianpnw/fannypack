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

describe('Fannypack Postcard Result', function () {
	//this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:4200")
			.get("/postcards")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
            //expect(err).to.be.null;
            //expect(res).to.have.status(200);
            console.log(res.request.url);
            console.log(requestResult);
            console.log(res.body);
				done();
			});
	});

    it('Should return an array object with 12 objects', function (){
        expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
        expect(response.body).to.have.length(12);
        expect(response).to.have.headers;
    });
});