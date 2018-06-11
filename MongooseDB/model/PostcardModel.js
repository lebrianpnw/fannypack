"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var PostcardModel = /** @class */ (function () {
    function PostcardModel() {
        this.createSchema();
        this.createModel();
    }
    PostcardModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            postcardID: Number,
            userID: Number,
            title: String,
            imageURL: String,
            description: String,
            rating: Number,
            cost: Number,
            activityLocation: String,
            activityCity: String,
            owner: String
        }, { collection: 'postcards' });
    };
    PostcardModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Postcards", this.schema);
    };
    PostcardModel.prototype.retrieveAllPostcards = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    PostcardModel.prototype.retrievePostcardDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return PostcardModel;
}());
exports.PostcardModel = PostcardModel;
