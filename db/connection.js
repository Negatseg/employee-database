const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Texas@4040',
    database: 'employee_db',

});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;