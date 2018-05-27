"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var PostcardModel_1 = require("./model/PostcardModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Postcards = new PostcardModel_1.PostcardModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        router.get('/app/postcards/:postcardID/count', function (req, res) {
            var id = req.params.postcardID;
            console.log('Query single list with id: ' + id);
        });
        router.post('/app/postcards/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.postcardID = _this.idGenerator;
            _this.Postcards.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/postcards/:postcardID', function (req, res) {
            var id = req.params.postcardID;
            console.log('Query single list with id: ' + id);
            _this.Postcards.retrievePostcardDetails(res, { postcardID: id });
        });
        router.get('/app/postcards/', function (req, res) {
            console.log('Query All postcards');
            _this.Postcards.retrieveAllPostcards(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
