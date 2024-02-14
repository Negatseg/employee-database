

const connection = require('./connection');

class DB{
  constructor (connection) {
    this.connection = connection;
  }

  findDepartments(){
    return this.connection.promise().query('SELECT * FROM department');
  }
  findRoles(){
    return this.connection.promise().query('SELECT * FROM role');
    // add join to show department name
  }
  findEmployees(){
    return this.connection.promise().query('SELECT * FROM employee');
    //add jooin to show role infor, department info
  }

  // add department

  // add role
  // addDepartment(departmentName) {
  //   return this.connection.promise().query('INSERT INTO department (department_name) VALUES (?)', [departmentName]);
  // }

  addDepartment(departmentName) {
    return this.connection.promise().query('INSERT INTO department (department_name) VALUES (?)', [departmentName]);
  }

  addRole(title, salary, departmentId) {
    return this.connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
  }

  // // add employee
  // addEmployee(employeeName) {
  //   return this.connection.promise().query('INSERT INTO employee (first_name, id) VALUES (?)', [employeeName]);
  // }

  // Inside your DB class

// Inside your DB class

addEmployee(firstName, id) {
  return this.connection.promise().query('INSERT INTO employee (id, first_name) VALUES (?, ?)', [id, firstName]);
}



  // update employee role
  updateEmployeeRole(employeeRole) {
    return this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [employeeRole]);
  }

}


module.exports = new DB(connection)
