// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  *[Description]{#description}
  *[Installation]{#installation}
  *[Usage]{#usage}
  *[License]{#license}
  *[Contribution]{#contribution}
  *[Tests]{#tests}
  *[Question]{#questions}
  
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
  ##### Github: [github.com/${data.username}](https://github.com/${data.username})
  ##### Email: [${data.email}]
`;
}

module.exports = generateMarkdown;
