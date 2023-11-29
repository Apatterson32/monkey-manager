-- Insert departments
INSERT INTO department (name) VALUES
    ('Marketing'),
    ('Sales'),
    ('Engineering');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
    ('Marketing Manager', 60000, 1),
    ('Sales Representative', 50000, 2),
    ('Software Developer', 70000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Alice', 'Cullen', 3, NULL),
    ('Carol', 'Danvers', 3, NULL),
    ('Mark', 'Green', 1, 1),
    ('Peter', 'Martin', 2, NULL);



