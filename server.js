const inquirer = require('inquirer');
const mysql = require('mysql2');
const readline = require('readline');
const db = require("./db");
const connection = require('./db/connection')
// const connection = mysql.createConnection({
//   // Your MySQL connection configuration goes here
//   host: 'localhost',      // Your MySQL host, usually 'localhost'
//   user: 'root',  // Your MySQL username
//   password: 'Texas@4040',  // Your MySQL password
//   database: 'employee_db'  // Your MySQL database name
// });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
        connection.end();
        process.exit();
        break;
    }

  } catch (error) {
    console.error('Error:', error.message);
  } 
  // finally {
  //   runApplication();
  // }
}

// function updateEmployeeRole() {
//   // Implementation of updating employee role
// }

const updateEmployeeRole = (employeeId, newRoleId) => {
  const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
  connection.query(query, [newRoleId, employeeId], (err, results) => {
    if (err) throw err;
    console.log('Employee role updated successfully.');
  });
};




// function addDepartment() {
//   rl.question('Enter department name: ', (departmentName) => {
//     const sql = 'INSERT INTO departments (name) VALUES (?)';
//     connection.query(sql, [departmentName], (err, results) => {
//       if (err) throw err;
//       console.log('Department added successfully!');
//       rl.close();
//       connection.end(); 
//     });
//   });
// }

async function addDepartment() {
  try {
    // Prompt the user for employee information
    const departmentInfo= await inquirer.prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the department name:',
      },
    ]);
    await db.addDepartment(departmentInfo.departmentName);

    console.log('Department added successfully!');
  } catch (error) {
    console.error('Error adding department:', error);
  }
}
// function addEmployee() {
//   rl.question('Enter employee name: ', (employeeName) => {
//     const sql = 'INSERT INTO employees (name) VALUES (?)';
//     connection.query(sql, [employeeName], (err, results) => {
//       if (err) throw err;
//       console.log('Employee added successfully!');
//       rl.close();
//       connection.end(); 
//     });
//   });
// }

// async function addEmployee() {
//   try {
//     // Prompt the user for employee information
//     const employeeInfo = await inquirer.prompt([
//       {
//         type: 'input',
//         id: 5,
//         name: 'first_name',
//         message: 'Enter the employee id and name:',
//       },
//     ]);
//     await db.addEmployee(employeeInfo.first_name, employeeInfo.id);

//     console.log('Employee added successfully!');
//   } catch (error) {
//     console.error('Error adding employee:', error);
//   }
// }

// const inquirer = require('inquirer');
// const DB = require('./db'); // Adjust the path as needed

async function addEmployee() {
  try {
    const employeeInfo = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id:',
      },
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the employee name:',
      },
    ]);

    //const db = new DB(connection);

    // Convert the id to a number (assuming it's supposed to be a number)
    //const id = parseInt(employeeInfo.id, 10);

    await db.addEmployee(employeeInfo.id, employeeInfo.first_name);
    console.log('Employee added successfully!');
  } catch (error) {
    console.error('Error adding employee:', error);
  }
}

// Call the addEmployee function to start the process
//addEmployee();

async function addRole() {
  try {
    // Prompt the user for employee information
    const roleInfo = await inquirer.prompt([
      {
        name: 'title',
        department_id: 'department_id',
        salary: 'salary',
        message: 'Enter the employee role:',
      },
    ]);
    await db.addEmployee(roleInfo.name, roleInfo.department_id, roleInfo.salary);

    console.log('Employee added successfully!');
  } catch (error) {
    console.error('Error adding employee:', error);
  }
}


// function addRole() {
//   rl.question('Enter role title: ', (roleTitle) => {
//     const sql = 'INSERT INTO roles (title) VALUES (?)';
//     connection.query(sql, [roleTitle], (err, results) => {
//       if (err) throw err;
//       console.log('Role added successfully!');
//       rl.close();
//       connection.end(); 
//     });
//   });
// }

function viewAllDepartments(){
  console.log('Check')
  db.findDepartments()
  .then(([departments])=>{
    console.log('Departments: ')
    console.table(departments)
    runApplication()
  })
}

function viewAllRoles(){
  console.log('Check')
  db.findRoles()
  .then(([roles])=>{
    console.log('Roles: ')
    console.table(roles)
    //runApplication()
  })
}


function viewAllEmployees(){
  console.log('Check')
  db.findEmployees()
  .then(([employees])=>{
    console.log('Employees: ')
    console.table(employees)
    //runApplication()
  })
}


runApplication();