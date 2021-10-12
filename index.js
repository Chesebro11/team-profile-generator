// link page template
const generateHTML = require('./src/generateprofile');

// requires for each role
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

// inquirer and fs requires
const fs = require('fs');
const inquirer = require('inquirer');
