var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = `INSERT INTO Customer (name, address) VALUES ?`;

    var values = [
        ['Nuree', 'Highway 35'],
        ['Hanan', 'Highway 36'],
        ['Tina', 'Highway 37'],
        ['Aom', 'Highway 38'],
        ['Nut', 'Highway 36']
    ];


    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        console.log("Customer records inserted successfully.");
    });

    con.end(function(err) {
        if (err) {
            return console.log('Error closing connection: ' + err.message);
        }
        console.log('Connection closed.');
    });
});
