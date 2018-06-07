"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CollectionModel = /** @class */ (function () {
    function CollectionModel() {
        this.createSchema();
        this.createModel();
    }
    CollectionModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            collectionID: Number,
            userID: Number,
            title: String,
            imageURL: String,
            description: String
        }, { collection: 'collections' });
    };
    CollectionModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Collections", this.schema);
    };
    CollectionModel.prototype.retrieveAllCollections = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return CollectionModel;
}());
exports.CollectionModel = CollectionModel;
