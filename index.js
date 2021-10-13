// link page template
const generateHTML = require('./src/generateprofile');

// requires for each role
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
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
const createEmployee = () => {
    console.log('=====================');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Select the employees role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Whats the employees name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employees name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Whats the employees email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the employees email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please submit the employees ID #')
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employees github username?',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please submit the github username!')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please submit the interns school',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please submit the interns school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmcreateEmployee',
            message: 'Would you like to add another employee?',
            default: 'true',
        }
    ])
    .then(employeeInput => {

        let { name, id, email, role, github, school, confirmcreateEmployee } = employeeInput;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === Intern) {
            employee = new Intern(name, id, email, school);

            console.log(employee)
        }

        teamArray.push(employee);

        if (confirmcreateEmployee) {
            return createEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
}
// createManager()
// createEmployee()
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log("Your team profile has been created! Check dist folder for the html!")
        }
    })
}

createManager()
.then(createEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err)
})