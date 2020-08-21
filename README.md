# Note Taker Homework 11  

## Introduction  

This assignment was given for any user of the program to keep track of employees within a company. The program allows the user to view, add, and remove employees, departments and roles. Also allows to update an existing employee's role. This program uses inquirer to prompt the user on what functions he would like to execute. It uses mySQL database as the database store. It also uses a node package called console table that prints out the information in a neat way in the terminal.

## Table of Contents:  
* [Objectives](#Objectives)
* [Process](#Process)
* [Challenges](#Challenges)
* [Summary](#Summary)
* [Sites](#Sites)
* [Video](#Video)
* [Gif](#Gif)

## Objectives  

```md
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

## Process  

* I first copied the homework into my own repository for the assignment.  
* I then completed npm i installation into my repository. 
* With my package.json, I installed inquirer, mysql, and console.table.
* I then went and gathered from past activities much of the boiler plate for my connection.  
* I then created a employeeTracker_db database with employee, department, and role tables.
* Using connection.query, I started writing the functions when the user selected certain processes.
* I started with the employee view, add, and delete functions. 
* I then continued with departments and finally with roles.
* I then used a JOIN LEFT action in mySQL to add one table into the employee view.
* I finished up by console logging certain ways to make it presentable in the console.   

## Challenges  

This assignment was a hefty one to begin. I had trouble at first not knowing how to set up what pages I need. I started with my server.js, employeeTracker.sql, and packag.json to begin. After messing back and forth I figured out how to path my files to what made sense. My next challenge came with connection.query. It was hard to nail down how to dig into what information I wanted to display. After nailing down the syntax it became easier. The hardest part of all has probably been the view employees selection. Joining two databases is a weird concept to grasp at times. I got good help from some classmates that put it in ways to grasp.

## Summary  

This assignment was a fun challenge for me. My server.js file ended up being over 400 lines of code. To this point in my class, I think this is the biggest file I have created. I had to make sure each thing ran properly and I feel like I organized it in a way that made sense and I could keep track of it. It felt really daunting at points during the assignment but I felt like it came together nicely. I would like to add to it in the future; such as a manager function, more join roles onto departments, other joins, among other such things. Good assignment!

## Sites  

* [Link to repository on GitHub](https://github.com/j-midgley13/employee-tracker-hw12)

## Video  

* [Link to video of application use](https://drive.google.com/file/d/1dRcFdMpfpCTRGpQ_B_UbaOpqqUWKwEUF/view)  

## Gif  

![process gif](/Assets/employeeTracker.gif)  
