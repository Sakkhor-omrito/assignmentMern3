const { MongoClient } = require("mongodb");

require('dotenv').config();
database ="mongodb://127.0.0.1:27017/";

const client = new MongoClient(database);
console.log('database connected');

module.exports={client}