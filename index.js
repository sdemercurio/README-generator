const inquirer = require('inquirer');

const fs = require('fs');

inquirer.prompt([
        {
            type: 'input',
            message: "Title of project?",
            name: 'title',
            validation: (value)=>{ if(value){return true} else {return 'Please enter a proper value to continue'}},
        }
    ])