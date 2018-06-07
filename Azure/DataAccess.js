"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    //  static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/postcardsSample?authSource=admin';
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    DataAccess.DB_CONNECTION_STRING = 'mongodb://admin:password1@ds016718.mlab.com:16718/fannypackdb';
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
