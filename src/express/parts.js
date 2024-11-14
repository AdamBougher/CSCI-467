var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'blitz.cs.niu.edu',
  user: 'student',
  password: 'student',
  database: 'csci467'
});

connection.connect();

module.exports = {
    getAll: async result => {
        connection.query('SELECT * FROM parts', function(err, rows){
            if (err) throw err;
            console.log('rows: ', rows);
            result(rows);
        });
    }
}

//checks for connection
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

//i read up, apparently we need a different server js file to handle everything and this would
//just populate the pages with the parts we need 
//const db = require(''); require the js file we create

//test everything and get it
db.getAll(rows => {
    console.log("Fetched rows:", rows);
    //close the connection after use
    db.closeConnection(); 
});