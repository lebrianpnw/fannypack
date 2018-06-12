import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IPostcardModel} from '../interfaces/IPostcardModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class PostcardModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
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
            }, {collection: 'postcards'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IPostcardModel>("Postcards", this.schema);
    }

    public retrieveAllPostcards(response:any, filter:Object): any {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrievePostcardDetails(response:any, filter:Object)
    {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {PostcardModel};