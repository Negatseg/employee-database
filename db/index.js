

const connection = require('./connection');

class DB{
  constructor (connection) {
    this.connection = connection;
  }

  findDepartments(){
    return this.connection.promise().query('SELECT * FROM departments');
  }
  findRoles(){
    return this.connection.promise().query('SELECT * FROM roles');
  }
  findEmployees(){
    return this.connection.promise().query('SELECT * FROM employeess');
  }
}


module.exports = new DB(connection)
