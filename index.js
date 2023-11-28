const Prompts = require('./js_modules/prompts');
const Queries = require('./js_modules/queries');

async function startApp() {
    const { action } = await Prompts.promptAction();

    switch (action) {
        case 'View All Departments':
            await viewAllDepartments();
            break;
        case 'View All Roles':
            await viewAllRoles();
            break;
        case 'View All Employees':
            await viewAllEmployees();
            break;
        case 'Add Department':
            await addDepartment();
            break;
        case 'Add Role':
            await addRole();
            break;
        case 'Add Employee':
            await addEmployee();
            break;
        case 'Update Employee Role':
            await updateEmployeeRole();
            break;
        default:
            console.log('Goodbye!');
            process.exit();
    }
}

async function viewAllDepartments() {
    const departments = await Queries.getAllDepartments();
    console.table(departments);
    startApp();
}

async function viewAllRoles() {
    const roles = await Queries.getAllRoles();
    console.table(roles);
    startApp();
}

async function viewAllEmployees() {
    const employees = await Queries.getAllEmployees();
    console.table(employees);
    startApp();
}

async function addDepartment() {
    const { departmentName } = await Prompts.promptAddDepartment();
    await Queries.addDepartment(departmentName);
    console.log('Department added successfully!');
    startApp();
}

async function addRole() {
    const { title, salary, departmentId } = await Prompts.promptAddRole();
    await Queries.addRole(title, salary, departmentId);
    console.log('Role added successfully!');
    startApp();
}

async function addEmployee() {
    const { firstName, lastName, roleId, managerId } = await Prompts.promptAddEmployee();
    await Queries.addEmployee(firstName, lastName, roleId, managerId);
    console.log('Employee added successfully!');
    startApp();
}

async function updateEmployeeRole() {
    const { employeeId, roleId } = await Prompts.promptUpdateEmployeeRole();
    await Queries.updateEmployeeRole(employeeId, roleId);
    console.log('Employee role updated successfully!');
    startApp();
}

startApp(); 



