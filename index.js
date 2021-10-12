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

// create an array for the team
const teamArray = [];

const createManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your managers ID!')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please submit an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "what is your managers office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!')
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager(name, id, email, office);

        teamArray.push(manager);
        console.log(manager);
    })
}

createManager()