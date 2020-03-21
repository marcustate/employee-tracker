const mysql = require("mysql");
const inquirer = require("inquirer");

const VIEW_ALL_EMPLOYEES = 'all employee in the company';
const ADD_DEPARTMENT = 'add department';
const ADD_DEPARTMENT_ROLES = 'add department roles';
const ADD_DEPARTMENT_EMPLOYEES = 'add department employees';
const VIEW_DEPARTMENT = 'look at department';
const VIEW_DEPARTMENT_EMPLOYEES = 'look at department employess';
const VIEW_DEPARTMENT_ROLES = 'look at department roles';
const UPDATE_EMPLOYEE_ROLE = 'update employee roles within a department';

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '#Truth3524',
    database: 'employeesdb'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    queryUser();
})

function queryUser() {
    inquirer.prompt
        ({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                VIEW_ALL_EMPLOYEES,
                ADD_DEPARTMENT,
                ADD_DEPARTMENT_ROLES,
                ADD_DEPARTMENT_EMPLOYEES,
                VIEW_DEPARTMENT,
                VIEW_DEPARTMENT_ROLES,
                VIEW_DEPARTMENT_EMPLOYEES,
                UPDATE_EMPLOYEE_ROLE,
                EXIT
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case VIEW_ALL_EMPLOYEES:
                    allEmployeesSearch();
                    break;

                case ADD_DEPARTMENT_:
                    departmentSearch();
                    break;

                case ADD_DEPARTMENT_ROLES:
                    departmentRoles();
                    break;

                case ADD_DEPARTMENT_:
                    departmentEmployees();
                    break;

                case VIEW_DEPARTMENT:
                    viewDepartment();
                    break;

                case VIEW_DEPARTMENT_ROLES:
                    viewDepartmentRoles();
                    break;

                case VIEW_DEPARTMENT_EMPLOYEES:
                    viewDepartmentEmployees();
                    break;

                case UPDATE_EMPLOYEE_ROLE:
                    updateEmployeeRoles();
                    break

                case EXIT:
                    console.log('Goodbye');
                    connection.end();
                    break;
            }
        });
}

function allEmployeesSearch() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'What employee would you like to search for?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}


function departmentSearch() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'What department would you like to search for?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}

function departmentRoles() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'What department roles would you like to search for?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}

function departmentEmployees() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'What department employees would you like to search for?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}

function viewDepartment() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'Which department would you like to look at?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}

function viewDepartmentRoles() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'Which department roles would you like to search for?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}

function viewDepartmentEmployees() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'Which department employees would you like to search for?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}

function updateEmployeeRoles() {
    inquirer.prompt
        ({
            name: 'employees',
            type: 'input',
            message: 'What employee would you like to update?',
        }).then(function (answer) {
            connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
                if (err) throw err;
                var values = res.map(function (employee) {
                    return [employee.id, employee.first_name, employee.last_name];
                });
                console.table(['Id', 'First Name', 'Last Name', 'TITLE'], values);
            });
            queryUser();
        });
}
