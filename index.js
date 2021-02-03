const inquirer = require('inquirer');

const fs = require('fs');

const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// const userPrompt = () =>
inquirer.prompt([
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

    ]).then((response) => {
        let doc = `
        # ${response.title}

        ## Table of Contents
        *[Description]{#description}
        *[Installation]{#installation}
        *[Usage]{#usage}
        *[License]{#license}
        *[Contribution]{#contribution}
        *[Tests]{#tests}
        *[Question]{#questions}
        *[Contact]{#contact}

        ## Description
        ${response.description}
        ## Installation
        ${response.install}
        ## Usage
        ${response.usage}
        ## License
        ${response.license}
        ## Contributions
        ${response.contribute}
        ## Tests
        ${response.tests}
        ## Questions/nIf you have any questions, please feel free to contact me at/n/n##### Github: [github.com/${response.username}](https://github.com/${response.username})\n\n ##### Email: [${response.email}]
        ${response.questions}
        `
        console.log(doc);
    })