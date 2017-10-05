var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var app = express();
var path = require("path");
var Parse = require('parse/node');
var ParseServer = require("parse-server").ParseServer;
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Parse.initialize("f3U4dybGW4Uk5BDIMMVWmN1Mnn142P3XFv8eigwn");
Parse.serverURL = 'https://eventkey.herokuapp.com/parse'





//Unsuccessful
// console.log(Parse.User.current());
// var query = new Parse.Query('userId');
// console.log(query);

//  query.find("userId":"X8RVN508nc")
//     .then(function(messages) {
//       response.success(messages);
//     });

// Not defined
// Parse.Cloud.define("getCheckIn", function(request, response) {
//   console.log("this is response ",request) ;
// });

/////need master key for this attempt

// var api = new ParseServer({
//   appId: "f3U4dybGW4Uk5BDIMMVWmN1Mnn142P3XFv8eigwn",
//   serverURL: "https://eventkey.herokuapp.com/parse"
// });

// app.use('/parse', api);


// Need class or object name for this attempt

// var userId = Parse.Object.extend("userId");
// console.log("USERID",userId);
// var query = new Parse.Query(userId);
// query.get("X8RVN508nc", {
//   success: function(results) {
//    console.log(gameScore)
//   },
//   error: function(object, error) {
//     console.log("this is the error", error);
//     console.log("this is the object ",object);
//   }
// });



///Unsuccessful
// Parse.Cloud.httpRequest({
//     url: 'https://eventkey.herokuapp.com/parse'
//   }).then(function(httpResponse) {
//     console.log(httpResponse)
//     console.log(httpResponse.text);
//   },function(httpResponse) {
//    console.log(httpResponse);
//     console.error('Request failed with response code ' + httpResponse.status);
//   });


//Unsuccessful
// Parse.Promise run(getCheckIn, X8RVN508nc, results );
// console.log(results); 
// class Event extends Parse.Object {
//   constructor() {
//     // Pass the ClassName to the Parse.Object constructor
//     super('Event');
//     // All other initialization
//     this.ObjectId = 'X8RVN508nc';
//     this.getCheckIn = this.getCheckIn.bind(this);
//   }

//   getCheckIn(X8RVN508nc) {
//     return ;
//   }

//   }


//Need Object or classname for this attempt
// userId.fetch({
//   success: function(myObject) {
//     console.log("MyOBJECT",myObject);
//   },
//   error: function(myObject, error) {
//     console.log("err", error);
//     console.log("myObject err", myObject);
//   }
// });


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader("Cache-Control", "no-cache");
  next();
});
app.use(express.static("public"));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/badapples", {
    useMongoClient: true
});
// mongoose.connect("badapples", {
//     useMongoClient: true
// });


var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


app.listen(PORT, function() {
  console.log("App running on port 3000!");
});

