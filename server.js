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
            message: "Welcome to the employee tracker! Choose from the selections below.",
            choices: ["View Employees", "Add Employee", "Update Employee Role", "Exit"]
        },
        ).then(response => {
            switch(response.startMenu) {

                case "View Employees":
                    console.log("VE success")
                    viewEmployees();
                    // start();
                    break;

                case "Add Employee":
                    console.log("AE success")
                    addEmployee();
                    // start();
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

function viewEmployees(){
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      
      let viewInfo = [];

      for (i = 0; i < res.length; i++){
         viewInfo.push({
           first_name: res[i].first_name,
           last_name: res[i].last_name,
           role: res[i].role_id,
           manager: res[i].manager_id
         })
      }
      console.table(viewInfo);
      start();
    });
  };

  function addEmployee(){
    inquirer
    .prompt([
        {
        type: "input",
        name: "first_name",
        message: "New Employee's First Name?"
        },
    {
        type: "input",
        name: "last_name",
        message: "New Employee's Last Name?"
    },
    {
        type: "number",
        name: "role_id",
        message: "What will be the Employee's role id?"
    },
    {
        type: "number",
        name: "manager_id",
        message: "What is the Employee's manager id?"
    }
    ]).then( response => {
        createEmpDB(response);
        start();
      });
};

function createEmpDB(response){
  console.log("Inserting a new employee...\n");
  var query = connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: response.first_name,
      last_name: response.last_name,
      role_id: response.role_id,
      manager_id: response.manager_id
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " New employee created!\n");
    }
  );
};