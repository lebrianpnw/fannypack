import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import {PostcardModel} from './model/PostcardModel';
import {CollectionModel} from './model/CollectionModel';
import {DataAccess} from './DataAccess';

import GooglePassport from './GooglePassport';

let passport = require('passport');

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Postcards:PostcardModel;
  public Collections:CollectionModel;
  public idGenerator:number;
  public googlePassportObj:GooglePassport;

  //Run configuration methods on the Express instance.
  constructor() {
    this.googlePassportObj = new GooglePassport();
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
    this.expressApp.use(session({ secret: 'keyboard cat' }));
    this.expressApp.use(passport.initialize());
    this.expressApp.use(passport.session());
  }

  private validateAuth(req, res, next):void {
    if (req.isAuthenticated()) 
    { 
        console.log("user is authenticated"); 
        console.log("user id: " + req.user.id);
        console.log("email: " + req.user.emails[0].value);
        return next(); 
    }
    console.log("user is not authenticated");
    res.redirect('/');
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.get('/auth/google', 
    passport.authenticate('google', 
        { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }
    )
    );

    router.get('/auth/google/callback', 
        passport.authenticate('google',
            { successRedirect: '/#/postcards', failureRedirect: '/'
            }
        )
    );

    router.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    router.get('/app/postcards/:postcardID/count', this.validateAuth, (req, res) => {
        var id = req.params.postcardID;
        console.log('Query single list with id: ' + id);
    });

    router.post('/app/postcards/', this.validateAuth, (req, res) => {
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

  router.get('/app/postcards/:postcardID', this.validateAuth, (req, res) => {
      var id = req.params.postcardID;
     console.log('Query single list with id: ' + id);
      this.Postcards.retrievePostcardDetails(res, {postcardID: id});
   });


   router.post('/app/collections/', this.validateAuth, (req, res) => {
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

	router.get('/app/collections/:collectionID', this.validateAuth, (req, res) => {
      var id = req.params.collectionID;
     console.log('Query single list with id: ' + id);
      this.Collections.retrieveCollectionDetails(res, {collectionID: id});
   });
   
   router.get('/app/postcards/', this.validateAuth, (req, res) => {
       
    /*if(this.googlePassportObj.email == null || this.googlePassportObj.email == "")
     {
         this.googlePassportObj.email = "lebrianpnw@gmail.com";
     }
     this.Postcards.retrieveAllPostcards(res, { owner: this.googlePassportObj.email});
*/  
     this.Postcards.retrieveAllPostcards(res, { owner: this.googlePassportObj.email });
 });

    router.get('/app/collections/', this.validateAuth, (req, res) => {
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