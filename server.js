const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Texas@4040',
  database: 'employee_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  });

// Inquirer prompts and logic for user interaction
async function runApplication() {
  try {
    // Connect to the database
    const connection = await pool.getConnection();

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
        // Call function to view all departments
        break;

      case 'View all roles':
        // Call function to view all roles
        break;

      case 'View all employees':
        // Call function to view all employees
        break;

      case 'Add a department':
        // Call function to add a department
        break;

      case 'Add a role':
        // Call function to add a role
        break;

      case 'Add an employee':
        // Call function to add an employee
        break;

      case 'Update an employee role':
        // Call function to update an employee role
        break;

      case 'Exit':
        // Close the database connection and exit the program
        connection.release();
        process.exit();
        break;
    }

    // Close the database connection after each user action
    connection.release();
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
connection.end((err) => {
    if (err) throw err;
    console.log('Connection closed.');
  });