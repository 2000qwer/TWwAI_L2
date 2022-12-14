
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './REST/routes';
import mongoose from 'mongoose';
import {config} from './config';
const { MongoClient, ServerApiVersion  } = require('mongodb');
const sha1 = require('sha1');

const hash = sha1('Hello, world!');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));
app.use(cors());
const databaseUrl = "mongodb+srv://MichalDataBase:Qwer1997%40@cluster0.bk3huw6.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(databaseUrl, {
   }, (error) => {
    if (error) {
      console.error(error);
    }
    else {
      console.info('Connect with database established');
    }
   });
   
process.on('SIGINT', () => {
    mongoose.connection.close(function () {
      console.error('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
   });
   




routes(app);











app.get('/', (req, res) => {
    console.log(hash)
    res.render('index.ejs', { title : 'To jest moje bagno!!!'  ,
hashed : hash });
});


app.listen(config.port, function () {
 console.info(`Server is running at ${config.port}`)
});







