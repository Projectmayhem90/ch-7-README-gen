// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions to provide information for the generated README
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your application?',
        name: 'appName',
    },
    {
        type: 'list',
        message: 'Which license are you using for your application?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None'],
    },
    {
        type: 'edtior',
        message: 'Please enter a description of your application: ',
        name: 'desc',
    },
    {
        type: 'editor',
        message: 'Please provide installation instructions: ',
        name: 'install',
    },
    {
        type: 'editor',
        message: 'Please provide usage instructions: ',
        name: 'usage',
    },
    {
        type: 'editor',
        message: 'Please provide testing instructions: ',
        name: 'testing',
    },
    {
        type: 'editor',
        message: 'Please list the contributions to this application?',
        name: 'contributors',
    },
    {
        type: 'editor',
        message: 'Please list any questions the user may have and provide answers: ',
        name: 'faq',
    }
];

// Function to write the README file
function writeToFile(fileName, data) {
    const finalREADME = generateMarkdown(data);

    fs.writeFile(fileName, finalREADME, (err) =>
        err ? console.log(err) : console.log('Successfully generated your README!'))
};

// Function to initialize the application
function init() {
    const fileName = 'generatedREADME.md';
    inquirer.prompt(questions)
    .then((response) => {
    writeToFile(fileName, response);
})
};

// Calling the function that will initialize the application
init();