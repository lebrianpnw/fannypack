import Mongoose = require("mongoose");

interface ICollectionModel extends Mongoose.Document {
    collectionID: number;
    userID: number;
    title: string;
    imageURL: string;
    description: string;
}
export {ICollectionModel};