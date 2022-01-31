const { MongoClient } = require("mongodb");

// Connection URI
const uri =  "mongodb://localhost:27017/";

// Create a new MongoClient
const client = new MongoClient(uri);

const dbName = 'fruitsDB';

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db(dbName).command({ ping: 1 });
    // const db = client.db(dbName);
    console.log("Connected successfully to server");

    

    insertDocument(db, function(){
      client.close();
    });
  
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const db = client.db(dbName)
const insertDocument = function(db, callback){

  const collection = db.collection('fruits');

  collection.insertOne({a:2});
}

// const doc = { name: "Neapolitan pizza", shape: "round" };
// const result = await dbName.insertOne(doc);
// console.log(
//   `A document was inserted with the _id: ${result.insertedId}`,
// );


