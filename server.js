var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');


var app = express();
var users = [];

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var connexion = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "",
    database : "users"
});
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.sendFile('/Users/imen/WebstormProjects/playlist/index.html')
});

app.post("/submit", function (request, response) {
    var name = request.body.name;
    var email = request.body.email;
    var phone = request.body.phone;

    connexion.connect(function (err) {
        if (err) throw err;
        console.log("connected ", connexion.threadId);
        var query = "insert into user (name, email, phone) values ('"+name+"','"+email+"',"+phone+")";
        connexion.query(query, function (err, data) {
            console.log("data", data);
            console.log('err',err)
        });

        connexion.end();

    });
    console.log(name +" "+ email + " "+ phone);
    response.send('thank you');
    //response.sendFile ('/Users/imen/WebstormProjects/playlist/list.html');
});
connexion.connect(function (err) {
    if (err) throw err;
    connexion.query("select * from user", function (err, data) {
        console.log("data", data);
        users = data;
        console.log('err',err)
    });

    connexion.end();

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


