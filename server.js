// boilerplate from assignments
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// create the connection information for the sql database
let connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeTracker_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    console.log("I am in!")
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// More choices once employee ones work.
// "View Departments", "Add Department", "View Roles", "Add Role", 

function start() {
    inquirer.prompt(
        {
            type: "list",
            name: "startMenu",
            message: "Welcome to the employee tracker! Choose from the choices below.",
            choices: ["View Employees", "Add Employee", "Update Employee Role", "Exit"]
        },
        ).then(response => {
            switch(response.startMenu) {

                case "View Employees":
                    console.log("VE success")
                    // viewEmployees();
                    start();
                    break;

                case "Add Employee":
                    console.log("AE success")
                    // addEmployee();
                    start();
                    break;

                case "Update Employee Role":
                    console.log("UER success")
                    // updateEmployee();
                    start();
                    break;

                case "Exit":
                    console.log("exit success")
                    return connection.end();

            };
        })
};