// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// When the user chooses a license from the list, then a badge is added to the README.
const badge = {
  'MIT License': {
    type: 'MIT',
    image: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    url: 'https://opensource.org/licenses/MIT',
  },
  'Mozilla Public': {
    type: 'Mozilla',
    image: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    url: 'https://opensource.org/licenses/MPL-2.0',
  },
  'Apache': {
    type: 'Apache',
    image: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    url: 'https://opensource.org/licenses/Apache-2.0',
  },
  'GNU GPL v3': {
    type: 'GNU GPL v3',
    image: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    url: 'http://www.gnu.org/licenses/gpl-3.0',
  },
  'Eclipse Public License': {
    type: 'Eclipse Public License',
    image: 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
    url: 'https://opensource.org/licenses/EPL-1.0',
  },
  'Common Development and Distribution License': {
    type: 'Common Development and Distribution License',
    image: 'https://img.shields.io/badge/License-CommonDevelopment-blue.svg',
    url: 'https://opensource.org/licenses/EPL-2.0',
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  [![${badge[data.license].type}](${badge[data.license].image})](${badge[data.license].url})

  ## Table of Contents:
  * [Description]{#description}
  * [Installation]{#installation}
  * [Usage]{#usage}
  * [License]{#license}
  * [Contribution]{#contribution}
  * [Tests]{#tests}
  * [Question]{#questions}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributions
  ${data.contribute}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please feel free to contact me at
  ##### Github: [github.com/${data.GitHub}](https://github.com/${data.GitHub})
  ##### Email: [${data.email}]
`;
}

module.exports = generateMarkdown;
