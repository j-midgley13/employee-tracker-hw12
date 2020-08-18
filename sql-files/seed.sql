USE employeeTracker_db

INSERT INTO employee (first_name, last_name, role_id, manager) VALUES ("Jameson", "Midgley", 1, "Keith");
INSERT INTO employee (first_name, last_name, role_id, manager) VALUES ("Sydni", "Cooper", 2, "Keith");
INSERT INTO employee (first_name, last_name, role_id, manager) VALUES ("Lee", "Matheson", 3, "Keith");
INSERT INTO employee (first_name, last_name, role_id, manager) VALUES ("Donovan", "Wilcox", 4, "Keith");

INSERT INTO department (name) VALUES ("Software Development");
INSERT INTO department (name) VALUES ("Accounting");
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Legal");

INSERT INTO role (title, salary) VALUES ("Lead Developer", "135000");
INSERT INTO role (title, salary) VALUES ("Junior Developer", "95000");
INSERT INTO role (title, salary) VALUES ("Accountant", "105000");
INSERT INTO role (title, salary) VALUES ("Sales Lead", "144000");
INSERT INTO role (title, salary) VALUES ("Junior Sales", "98000");
INSERT INTO role (title, salary) VALUES ("Lawyer", "192000");
