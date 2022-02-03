
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitsSchema = new mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  rating : {
    type : Number,
    min: 1,
    max : 10
  },
  review : String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit({
  name : "Apple",
  rating : 7,
  review : "Preety good fruit."
});

const orange = new Fruit({
  name :"orange",
  rating : 4,
  review : "Sour"
});

const kiwi = new Fruit({
  name : "Kiwi",
  rating : 10,
  review : "Best Fruit"
});

const banana = new Fruit({
  name : "Banana",
  rating : 2,
  review : "Good for health"
});


// Fruit.insertMany([orange,kiwi,banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully inserted into fruits DB.");
//   }
// });



const pineapple = new Fruit({
  name : "Pineapple",
  rating : 9,
  review : "Great fruit"
});

pineapple.save();


const personSchema = new mongoose.Schema({
  name : String,
  age : Number,
  favouriteFruit : fruitsSchema
});


const Person = mongoose.model("Person", personSchema);

// const pp = new Person({
//   name : "John",
//   age :35
// });

const pp = new Person({
  name : "Amy",
  age :25,
  favouriteFruit:pineapple
});



// pp.save();

// fruit.save();


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

    // mongoose.connection.close();
    // console.log(fruits);
    fruits.forEach(function(pprnt){
      console.log(pprnt.name);
    });
    
  }
});


// Fruit.updateOne({_id:"61fc4608af29c9e3de916138"},{name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated. ");
//   }
// });


Person.updateOne({name:"John"},{favouriteFruit:pineapple},function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Successfully updated. ");
    }
  });
  


// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted successfully");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted Many elements");
//   }
// });






//working mongodb native driver

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017';

// const dbName = 'fruitsDB';

// const client = new MongoClient(url, {useNewUrlParser : true});

// client.connect(function(err){
//   assert.equal(null,err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   // for insertion
//   // insertDocuments(db, function(){
//   //   client.close();
//   // });  

//   findDocuments(db, function(){
//     client.close();
//   })

 
// });

// const insertDocuments = function(db , callback){

//   const collection = db.collection('fruits');

//   collection.insertMany([
//     {
//       name : "Apple",
//       score : 8,
//       review : "Great fruit"
//     },
//     {
//       name : "Orange",
//       score : 6,
//       review : "sour"
//     },
//     {
//       name : "Banana",
//       score : 9,
//       review : "Good"
//     }
//   ], function(err, result){
//     // assert.equal(err,null);
//     // assert.equal(3, result.result.n);
//     // assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };

// const findDocuments = function(db, callback){

//   const collection = db.collection('fruits');

//   collection.find({}).toArray(function(err, fruits){
//     assert.equal(err,null);
//     console.log("Found the following records")
//     console.log(fruits);
//     callback(fruits);
//   });
// }
//working mongodb native driver



// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri =  "mongodb://localhost:27017/";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// const dbName = 'fruitsDB';

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db(dbName).command({ ping: 1 });
//     // const db = client.db(dbName);
//     console.log("Connected successfully to server");

    

//     insertDocument(db, function(){
//       client.close();
//     });
  
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// // const db = client.db(dbName)
// const insertDocument = function(db, callback){

//   const collection = db.collection('fruits');

//   collection.insertOne({a:2});
// }

// // const doc = { name: "Neapolitan pizza", shape: "round" };
// // const result = await dbName.insertOne(doc);
// // console.log(
// //   `A document was inserted with the _id: ${result.insertedId}`,
// // );


