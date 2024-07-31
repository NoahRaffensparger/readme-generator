// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title',
      },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description',
      },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions',
      },
    {
        type: 'input',
        name: 'info',
        message: 'Enter usage information',
     },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
      },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions',
      },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense', 'None']
      },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub username',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
      },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('READ.md', markdown.generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Successfully created README!')
      )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers)
  });
}

// Function call to initialize app
init();
