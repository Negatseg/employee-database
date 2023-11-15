INSERT INTO department (id, name) VALUES
(1, 'Human Resources'),
(2, 'Finance'),
(3, 'Information Technology'),
(4, 'Marketing');

-- Seed data for Role table
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'HR Manager', 70000.00, 1),
(2, 'Financial Analyst', 60000.00, 2),
(3, 'Software Developer', 80000.00, 3),
(4, 'Marketing Specialist', 65000.00, 4);

-- Seed data for Employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Jane', 'Smith', 2, 1),
(3, 'Michael', 'Johnson', 3, 1),
(4, 'Emily', 'Davis', 4, 2),
(5, 'Chris', 'Wilson', 3, 1);