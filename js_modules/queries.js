const connection = require('../config/connection');

class Queries {
    static getAllDepartments() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM department', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getAllRoles() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM role', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getAllEmployees() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM employee', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static addDepartment(departmentName) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO department SET ?', { name: departmentName }, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static addRole(title, salary, departmentId) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO role SET ?', { title, salary, department_id: departmentId }, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static addEmployee(firstName, lastName, roleId, managerId) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO employee SET ?', { first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId }, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static updateEmployeeRole(employeeId, roleId) {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Queries;

