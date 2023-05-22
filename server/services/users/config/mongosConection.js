
const { MongoClient } = require("mongodb");


// Replace the placeholder with your Atlas connection string
const client = new MongoClient(process.env.DATABASE_URL);
let database;

async function connect() {
    try {
        database = client.db("latihanBondan");
        return database;
    } catch (error) {
        console.log(error);
    }
}
function getDb() {
    return database
}
module.exports = { connect, getDb }
