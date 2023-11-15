const inquirer = require('inquirer');
const mysql = require('mysql2');
const readline = require('readline');
const db = require("./db");

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

// Connect to the database
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database.');
// });

// Inquirer prompts and logic for user interaction
async function runApplication() {
  try {
    // Connect to the database
    // const connection = await pool.getConnection();

    // Inquirer prompts and logic for user interaction
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

    // Perform actions based on user choice
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
        // Close the database connection and exit the program
        connection.release();
        process.exit();
        break;
    }

    // Close the database connection after each user action
    //connection.release();
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    // Continue running the application
    runApplication();
  }
}

// Start the application
runApplication();

// Display functions for viewing data

// Functions for CRUD operations
// Example update query
const updateEmployeeRole = (employeeId, newRoleId) => {
  const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
  connection.query(query, [newRoleId, employeeId], (err, results) => {
    if (err) throw err;
    console.log('Employee role updated successfully.');
  });
};

// Close the database connection when the program ends
// connection.end((err) => {
//   if (err) throw err;
//   console.log('Connection closed.');
// });

// Query to retrieve all departments
//const query = 'SELECT * FROM department';

// Execute the query
// connection.query(query, (err, results) => {
//   if (err) {
//     console.error('Error executing query: ', err);
//     return;
//   }

//   // Display the results
//   console.log('All Departments:');
//   console.table(results);

//   // Close the connection
//   connection.end();
// });



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Function to add a department
function addDepartment() {
  rl.question('Enter department name: ', (departmentName) => {
    const sql = 'INSERT INTO departments (name) VALUES (?)';
    connection.query(sql, [departmentName], (err, results) => {
      if (err) throw err;
      console.log('Department added successfully!');
      rl.close();
      connection.end(); // Close the database connection
    });
  });
}

// Function to add a role
function addRole() {
  // You can add more prompts here to get role-related information
  rl.question('Enter role title: ', (roleTitle) => {
    const sql = 'INSERT INTO roles (title) VALUES (?)';
    connection.query(sql, [roleTitle], (err, results) => {
      if (err) throw err;
      console.log('Role added successfully!');
      rl.close();
      connection.end(); // Close the database connection
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

// Handle different cases
// switch (userInput) {
//   case 'Add a department':
//     addDepartment();
//     break;

//   case 'Add a role':
//     addRole();
//     break;

//   default:
//     console.log('Invalid option');
//     rl.close();
//     connection.end(); // Close the database connection
//     break;
// }