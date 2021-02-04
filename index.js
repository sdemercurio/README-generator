// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Ask if this is handled correctly
const generateMarkdown = require('./generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
let file = 'README.md';

const userPrompt = () => {
 return inquirer.prompt([
        {
            type: 'input',
            message: "Title of project?",
            name: 'title',
            // validation: (value)=>{ if(value){return true} else {return 'Please enter a proper value to continue'}},
        },
        {
            type: 'input',
            message: "Describe your project",
            name: 'description',
        },
        {
            type: 'editor',
            message: "Please enter installation instructions",
            name: 'install',
        },
        {
            type: 'editor',
            message: "Please enter your project’s features, interface, caveats, gotchas, tips, etc.",
            name: 'usage',
        },
        {
            type: 'list',
            message: "Please choose a license relevant to your project",
            name: 'license',
            choices: ['MIT License', 'GNU Lesser', 'Mozilla Public', 'Apache', 'The Unlicense'],
        },
        {
            type: 'input',
            message: "Please provide information on how other users can contribute to this project",
            name: 'contribute',
        },
        {
            type: 'input',
            message: "Please provide any tests and necessary examples",
            name: 'tests',
        },
        {
            type: 'input',
            message: "Please enter your GitHub username",
            name: 'GitHub',
        },
        {
            type: 'input',
            message: "Please enter your email",
            name: 'email',
        },
        

    ]);

}

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
