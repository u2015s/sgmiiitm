var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require ("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));


//Set up mongoose connection

// var mongoDB = 'mongodb+srv://utkarsh:worldcup2015@cluster0-lqkvp.mongodb.net/SGM_1?retryWrites=true&w=majority';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// var userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     subject: String,
//     message: String
// });

// var User = mongoose.model("User", userSchema);











// mongoose.connect("mongodb+srv://us2015:worldcup2015@usdb-ddewx.mongodb.net/test?retryWrites=true&w=majority");


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://us2015:<password>@usdb-ddewx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

























app.get('/',function(req,res ){
    res.render("pages/index");
})

app.get('/about',function(req,res ){
    res.render("pages/about");
})

app.get('/contact',function(req,res ){
    res.render("pages/contact");
})


app.get('/teacher',function(req,res ){
    res.render("pages/teacher");
})


app.get('/gallery',function(req,res ){
    res.render("pages/gallery");
})


app.get('/info',function(req,res ){
    User.find({},function(err, user){
        if(err){
            console.log(err);
        } else{
            res.render("pages/coninfo",{people:user});
        }
    })

    // res.render("pages/coninfo");
})

app.post("/info",function(req, res){

        var name=req.body.name;
        var email=req.body.email;
        var subject=req.body.subject;
        var message=req.body.message;
        var newUser = {name: name, email:email, subject:subject, message:message};
        
        User.create(newUser, function(err, newCreated){
            if(err){
                console.log(err);
                alert("Wrong entry");

            }else{
                res.redirect("contact");
            }
        })
    });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})
