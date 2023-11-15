const inquirer = require('inquirer');
const mysql = require('mysql2');
const readline = require('readline');
const db = require("./db");



n
async function runApplication() {
  try {
    
    const userChoice = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    });

    switch (userChoice.action) {
      case 'View all departments':
        viewAllDepartments();
        break;

      case 'View all roles':
        viewAllRoles();
        break;

      case 'View all employees':
        viewAllEmployees();
        break;

      case 'Add a department':
        addDepartment();
        break;

      case 'Add a role':
        addRole();
        break;

      case 'Add an employee':
        addEmployee();
        break;

      case 'Update an employee role':
        updateEmployeeRole();
        break;

      case 'Exit':
        
        connection.release();
        process.exit();
        break;
    }

    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    runApplication();
  }
}


runApplication();


const updateEmployeeRole = (employeeId, newRoleId) => {
  const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
  connection.query(query, [newRoleId, employeeId], (err, results) => {
    if (err) throw err;
    console.log('Employee role updated successfully.');
  });
};




function addDepartment() {
  rl.question('Enter department name: ', (departmentName) => {
    const sql = 'INSERT INTO departments (name) VALUES (?)';
    connection.query(sql, [departmentName], (err, results) => {
      if (err) throw err;
      console.log('Department added successfully!');
      rl.close();
      connection.end(); 
    });
  });
}


function addRole() {
  rl.question('Enter role title: ', (roleTitle) => {
    const sql = 'INSERT INTO roles (title) VALUES (?)';
    connection.query(sql, [roleTitle], (err, results) => {
      if (err) throw err;
      console.log('Role added successfully!');
      rl.close();
      connection.end(); 
    });
  });
}

function viewAllDepartments(){
  console.log('Check')
  db.findDepartments()
  .then(([departments])=>{
    console.log('Departments: ')
    console.table(departments)
    runApplication()
  })
}

