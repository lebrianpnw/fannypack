"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var PostcardModel_1 = require("./model/PostcardModel");
var CollectionModel_1 = require("./model/CollectionModel");
var GooglePassport_1 = require("./GooglePassport");
var passport = require('passport');
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.googlePassportObj = new GooglePassport_1["default"]();
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Postcards = new PostcardModel_1.PostcardModel();
        this.Collections = new CollectionModel_1.CollectionModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: 'keyboard cat' }));
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            console.log("user id: " + req.user.id);
            console.log("email: " + req.user.emails[0].value);
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/#/postcards', failureRedirect: '/'
        }));
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        router.get('/app/postcards/:postcardID/count', this.validateAuth, function (req, res) {
            var id = req.params.postcardID;
            console.log('Query single list with id: ' + id);
        });
        router.get('/app/postcards/:postcardID', this.validateAuth, function (req, res) {
            var id = req.params.postcardID;
            console.log('Query single list with id: ' + id);
            _this.Postcards.retrievePostcardDetails(res, { postcardID: id });
        });
        router.post('/app/postcards/', function (req, res) {
            var jsonObj = req.body;
            jsonObj.postcardID = req.body.postcardID;
            jsonObj.owner = req.body.owner;
            jsonObj.userID = req.body.userID;
            jsonObj.title = req.body.title;
            jsonObj.imageURL = req.body.imageURL;
            jsonObj.description = req.body.description;
            jsonObj.rating = req.body.rating;
            jsonObj.cost = req.body.cost;
            jsonObj.activityLocation = req.body.activityLocation;
            jsonObj.activityCity = req.body.activityCity;
            _this.Postcards.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
                console.log('created object');
            });
            res.json({ message: 'Postcard created!', jsonObj: jsonObj });
        });
        router.get('/app/collections/:collectionID', this.validateAuth, function (req, res) {
            var id = req.params.collectionID;
            console.log('Query single list with id: ' + id);
            _this.Collections.retrieveCollectionDetails(res, { collectionID: id });
        });
        router.get('/app/postcards/', this.validateAuth, function (req, res) {
            /*if(this.googlePassportObj.email == null || this.googlePassportObj.email == "")
             {
                 this.googlePassportObj.email = "lebrianpnw@gmail.com";
             }
             this.Postcards.retrieveAllPostcards(res, { owner: this.googlePassportObj.email});
        */
            _this.Postcards.retrieveAllPostcards(res, { owner: _this.googlePassportObj.email });
        });
        router.get('/app/collections/', this.validateAuth, function (req, res) {
            console.log('Query All collections');
            _this.Collections.retrieveAllCollections(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/angularSrc'));
    };
    return App;
}());
exports.App = App;
