// const validURL = require("valid-url");

const { connect } = require("mongoose");

// const randomString = require("randomstring");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://marta:haslo@imienazwisko.z0ca1.mongodb.net/marta?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const DB_USER = "user";
const DB_PASSWORD = "password";
const WEBSITE_URL = "http://localhost:8080/";
//console.log(MongoClient);
client.connect((err) => {
    
  const collection = client.db("marta", {name: String, lastName:String}).collection("user");
  //let schema = MongoClient.Schema({});
  console.log(client.isConnected());
  //client.close();
});
//console.log(connect);


// var schema = new mongoose.Schema({
//     short: String,
//     url: String
// });

// var URL = mongoose.model("URL", schema);

// function validateURL(url) {

//     return validURL.isUri(url);

// }

// function findURL(short, cb) {

//     URL.findOne({ short: short }).exec(function(err, url) {

//         if(!url || err) {
//             return cb( new Error("URL not found") );
//         }

//         cb(null, url.url);

//     });

// }

shortenURL = (value, cb)=> {

    if( !validateURL(value) ) {
        return cb( new Error("URL is not valid") );
    }

    // URL.findOne({ url: value }).exec(function(err, url) {

    //     if(err) {
    //         return cb(err);
    //     }

    //     if(!url) {

    //         var short = randomString.generate(5);
    //         var newURL = new URL({
    //             short: short,
    //             url: value
    //         });

    //         newURL.save(function(err, url) {

    //             if(err) {
    //                 return cb(err);
    //             }

    //             cb(null, WEBSITE_URL + url.short);

    //         });

    //     } else {
    //         cb(null, WEBSITE_URL + url.short);
    //     }

    // });

}

module.exports = {
    shorten: shortenURL,
    //find: findURL
};
