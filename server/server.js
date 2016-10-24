// required modules
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import responseTime from 'response-time'
import babel from 'babel-core/register'

// require in other files
const router = require('./routes/router.js');

const port = process.env.PORT || 8050;
const app = express();

// set up postgres DB
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/mocabulary';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });

// middleware
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// serve up client side assets
app.use(express.static(path.join(__dirname, "../client")));

// redirect http requests to router
app.use('/', router);

// start the server
app.listen(port, function () {
	console.log('App running at: ' + port);
});


