const mysql = require('mysql2');


// Create a MySQL connection
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'Texas@4040',
//   database: 'employee_db',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
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