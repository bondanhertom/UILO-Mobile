
const { MongoClient } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function getUser() {
    try {
        const database = client.db("latihanBondan");
        const users = database.collection("users")
        const query = {firstName:"umay"};
        const user = await users.findOne(query)
        console.log(user);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
getUser().catch(console.dir);
