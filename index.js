// Required packages to run Gen


const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')

// Data added to section for README
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
        message: 'What is the Sofware Title?',
        name: 'appName',
    },
    {
        type: 'list',
        message: 'Select a License below',
        name: 'license',
        choices: ['MIT', 'I donnt want to use one'],
    },
    {
        type: 'edtior',
        message: 'Add what your application does via selected text application: ',
        name: 'desc',
    },
    {
        type: 'editor',
        message: 'Add how you application is installed or what version users should use: ',
        name: 'install',
    },
    {
        type: 'editor',
        message: 'Testing or Debug Information: ',
        name: 'testing',
    },
    {
        type: 'editor',
        message: 'List collaborators',
        name: 'collaborators',
    },
    {
        type: 'editor',
        message: 'ADD FAQ if needed: ',
        name: 'faq',
    }
];

function writeToFile(fileName, data) {
    const finalREADME = generateMarkdown(data);

    fs.writeFile(fileName, finalREADME, (err) =>
        err ? console.log(err) : console.log('Successfully generated your README!'))
};
//Init Function
function init() {
    const fileName = 'generatedREADME.md';
    inquirer.prompt(questions)
    .then((response) => {
    writeToFile(fileName, response);
})
};



//Add function
init();