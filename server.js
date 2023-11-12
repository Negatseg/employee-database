const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Texas@4040',
  database: 'employee_db',
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  });

// Inquirer prompts and logic for user interaction

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