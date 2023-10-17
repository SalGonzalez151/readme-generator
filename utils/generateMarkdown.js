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
  return `# ${data.title} \n\n ## Description \n\n ${data.description} \n\n 
  ## Table of Contents \n\n 
  - [installation](#installation) \n 
  - [usage](#usage) \n 
  - [credits](#credits) \n\n
  
  ## installation \n\n ${data.installation} \n\n
  ## usage \n\n ${data.usage} \n\n 
  ## test \n\n ${data.test} \n\n
  ## credits \n\n ${data.credit} \n\n
  ## contribute \n\n 
  ## questions \n\n
 if you have questions see my email at ${data.email} and github at ${data.github}

`;
}

module.exports = generateMarkdown;
