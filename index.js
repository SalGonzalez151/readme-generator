// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'what is the name of your project?'
}, {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
}, {
    type: 'list',
    name: 'license',
    message: 'what kind of license do you want to give your project',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
}, {
    type: 'input',
    name: 'installation',
    message: 'What command would you like to run to install dependiences?',
    default: 'npm i'
}, {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run the test?',
    default: 'npm test'
}, {
    type: 'input',
    name: 'usage',
    message: 'What details need to be provided to the user if they want to use the repo'

}, {
    type: 'input',
    name: 'contributing',
    message: 'Please provide details to the user about what they need to know for wanting to contribute to the repository'
}, {
    type: 'input',
    name: 'github',
    message: 'Please provide your Github username'
}, {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
