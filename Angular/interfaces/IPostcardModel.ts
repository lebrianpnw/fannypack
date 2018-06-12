import Mongoose = require("mongoose");

interface IPostcardModel extends Mongoose.Document {
    postcardID: number;
    userID: number;
    title: string;
    imageURL: string;
    description: string;
    rating: number;
    cost: number;
    activityLocation: string;
    activityCity: string;
    owner: string;
}
export {IPostcardModel};