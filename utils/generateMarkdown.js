// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return  ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `- [license](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License \n\n
    This project is licensed under the ${license} license`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n\n ${renderLicenseBadge(data.license)} \n\n
   ## Description \n\n ${data.description} \n\n 
  ## Table of Contents \n\n 
  - [installation](#installation) \n 
  - [usage](#usage) \n 
  - [credits](#credits) \n
  ${renderLicenseLink(data.license)} \n\n
  
  ## installation \n\n ${data.installation} \n\n
  ## usage \n\n ${data.usage} \n\n 
  ## test \n\n ${data.test} \n\n
  ## credits \n\n ${data.credit} \n\n
  ## contribute \n\n ${data.contributing} \n\n
  ${renderLicenseSection(data.license)} \n\n
  ## questions \n\n
 if you have questions see my email at ${data.email} and github at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
