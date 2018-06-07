import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import {PostcardModel} from './model/PostcardModel';
import {CollectionModel} from './model/CollectionModel';
import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Postcards:PostcardModel;
  public Collections:CollectionModel;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Postcards = new PostcardModel();
    this.Collections = new CollectionModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    router.get('/app/postcards/:postcardID/count', (req, res) => {
        var id = req.params.postcardID;
        console.log('Query single list with id: ' + id);
    });

    router.post('/app/postcards/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.postcardID = this.idGenerator;
        this.Postcards.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
    });

  router.get('/app/postcards/:postcardID', (req, res) => {
      var id = req.params.postcardID;
     console.log('Query single list with id: ' + id);
      this.Postcards.retrievePostcardDetails(res, {postcardID: id});
   });

   router.post('/app/collections/', (req, res) => {
    console.log(req.body);
    var jsonObj = req.body;
    jsonObj.postcardID = this.idGenerator;
    this.Collections.model.create([jsonObj], (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });
    res.send(this.idGenerator.toString());
    this.idGenerator++;
});

    router.get('/app/postcards/', (req, res) => {
        console.log('Query All postcards');
        this.Postcards.retrieveAllPostcards(res);
    });

    router.get('/app/collections/', (req, res) => {
        console.log('Query All collections');
        this.Collections.retrieveAllCollections(res);
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/angularSrc'));
    
  }

}

export {App};