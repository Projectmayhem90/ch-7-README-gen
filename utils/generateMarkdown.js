// Function that returns the license badge, or if there is no license, an empty string.
function renderLicenseBadge(license) {
    if (license == 'None') {
      return '';
    } else {
      return `![License Badge](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-brightgreen)`;
    }
  }
  
  // Function that returns the license link, or if there is no license, an empty string.
  function renderLicenseLink(license) {
    if (license == 'MIT') {
      return `[Find more information here.](https://choosealicense.com/licenses/mit/)`;
    } else if (license == 'Apache 2.0') {
      return `[Find more information here.](https://choosealicense.com/licenses/apache-2.0/)`;
    } else if (license == 'GNU GPLv3') {
      return `[Find more information here.](https://choosealicense.com/licenses/gpl-3.0/)`;
    } else {
      return '';
    }
  }
  
  // Function that returns the license section, or if there is no license, an empty string.
  function renderLicenseSection(license) {
    if (license == 'None') {
      return '';
    } else {
      return `## License
  This application uses the ${license} license. ${renderLicenseLink(license)}`;
    }
  }
  
  function renderLicenseTable(license) {
    if (license == 'None') {
      return '';
    } else {
      return `- [License](#license)`;
    }
  }
  
  // Function to fill in the information within the generated README
  function generateMarkdown(data) {
    const license = data.license;
  
    return `# ${data.appName}
  ${renderLicenseBadge(license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [Questions](#questions)
  ${renderLicenseTable(license)}
    
  ## Description
  ${data.desc}
    
  ## Installation
  ${data.install}
    
  ## Usage
  ${data.usage}
  ## Testing
  ${data.testing}
    
  ## Contribution
  ${data.contributors}
    
  ## Questions
  ${data.faq}
  **If you have any additional questions please reach out to me here**:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})
  ${renderLicenseSection(license)}
  `};
  
  // Exporting the function to be called upon within other js files.
  module.exports = generateMarkdown;