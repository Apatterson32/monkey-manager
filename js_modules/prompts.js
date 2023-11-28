const inquirer = require('inquirer');

class Prompts {
    static promptAction() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Update Employee Role',
                    'Exit'
                ]
            }
        ]);
    }

    static promptAddDepartment() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:'
            }
        ]);
    }

    static promptAddRole() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the role:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the role:'
            },
            {
                type: 'input',
                name: 'departmentId',
                message: 'Enter the department ID for the role:'
            }
        ]);
    }

    static promptAddEmployee() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the first name of the employee:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the last name of the employee:'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter the role ID for the employee:'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter the manager ID for the employee (optional):'
            }
        ]);
    }

    static promptUpdateEmployeeRole() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter the ID of the employee you want to update:'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter the new role ID for the employee:'
            }
        ]);
    }
}

module.exports = Prompts;
