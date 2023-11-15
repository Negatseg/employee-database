//const app = express();

// Example route to get all departments
// app.get('/departments', (req, res) => {
//   connection.query('SELECT * FROM departments', (err, results) => {
//     if (err) {
//       console.error('Error executing query: ', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     res.json(results);
//   });
// });

const connection = require('./connection');

class DB{
  constructor (connection) {
    this.connection = connection;
  }

  findDepartments(){
    return this.connection.promise().query('SELECT * FROM departments');
  }
  findRoles(){
    return this.connection.promise().query('SELECT * FROM departments');
  }
  findEmployess(){
    return this.connection.promise().query('SELECT * FROM departments');
  }
}


module.exports = new DB(connection)
