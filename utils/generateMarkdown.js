// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == "Apache 2") {
    return `![Apache 2](https://img.shields.io/badge/license-Apache%202-blue)`
  } else if (data.license == "BSD") {
    return `![BSD](https://img.shields.io/badge/license-BSD-blue)`;
  } else if (data.license == "GPL") {
    return `![GPL](https://img.shields.io/badge/license-GPL-blue)`;
  } else if (data.license == "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-blue)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "None") {
    return `## License\nThis application is licensed under ${data.license}.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data)}\n
  ## Description\n${data.description}\n
  ## Table of Contents\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contribution](#contribution)\n
  * [Tests](#tests)\n
  * [Questions](#questions)\n## Installation\n${data.installation}\n
  ## Usage\n${data.usage}\n
  ${renderLicenseSection(data)}\n
  ## Contribution\n${data.contribution}\n
  ## Tests\n${data.test}\n
  ## Questions\nIf you have any questions and want to reach me, contact me here at [${data.githubUsername}@github.com](github.com/${data.githubUsername}) or ${data.email}.
`;
}

module.exports = generateMarkdown;
