// var mysql = require('mysql');
var mysql = define(["mysql"],function(mysql){
    /// your code
    return require()
});
var connexion = mysql.createConnection({
 host : "localhost",
 port : 3306,
 user : "root",
 password : "",
 database : "users"
});

/*connexion.connect(function (err) {
    if(err) throw err;
    console.log("connected ", connexion.threadId);
    connexion.query('insert into playlist (title, artist, genre) values ("in my feeling","Drake","pop")', function (err, data) {
        console.log("data", data);
    });
    connexion.query('insert into playlist (title, artist, genre) values ("Tayf","Mashrou Leila","Rock/Arabic")', function (err, data) {
        console.log("data", data);
    });
    connexion.query('insert into playlist (title, artist, genre) values ("Habibi","Mashrou Leila","Rock/Arabic")', function (err, data) {
        console.log("data", data);
    });
    connexion.end();
});*/


$(document).ready(function() {

$("#submit").on("click", function (event) {
    event.preventDefault();
    var name = $("#Input1").val();
    var email = $("#Input2").val();
    var phone = $("#Input3").val();

    console.log(name+" "+email+" "+phone);

    /*connexion.connect(function (err) {
        if (err) throw err;
        console.log("connected ", connexion.threadId);
        connexion.query('insert into user (name, email, phone) values ("in my feeling","Drake","pop")', function (err, data) {
            console.log("data", data);
        });

        connexion.end();

    })*/
});
});