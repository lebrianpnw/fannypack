import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ICollectionModel} from '../interfaces/ICollectionModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CollectionModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                collectionID: Number,
                userID: Number,
                title: String,
                imageURL: String,
                description: String,    
            }, {collection: 'collections'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ICollectionModel>("Collections", this.schema);
    }

    public retrieveAllCollections(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
/*
    public retrieveCollectionDetails(response:any, filter:Object)
    {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }*/
}
export {CollectionModel};