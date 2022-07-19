// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == "Apache 2") {
    return `![Apache 2](https://img.shields.io/badge/license-Apache%202-blue)\n\n`
  } else if (data.license == "BSD") {
    return `![BSD](https://img.shields.io/badge/license-BSD-blue)\n\n`;
  } else if (data.license == "GPL") {
    return `![GPL](https://img.shields.io/badge/license-GPL-blue)\n\n`;
  } else if (data.license == "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-blue)\n\n`;
  } else {
    return ``;
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license !== "None") {
    return `* [License](#license)\n`;
  }
  return ``;
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "None") {
    return `## License\n\nThis application is licensed under ${data.license}.\n\n`
  }
  return ``;
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderLicenseBadge(data)}## Description\n\n${data.description}\n\n## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n${renderLicenseLink(data)}* [Contribution](#contribution)\n* [Tests](#tests)\n* [Questions](#questions)\n\n## Installation\n\nThe application does require dependencies, so enter this code (below) into the terminal and run it:\n\`\`\`\n${data.installation}\n\`\`\`\n\n## Usage\n\n${data.usage}\n\n${renderLicenseSection(data)}## Contribution\n\n${data.contribution}\n\n## Tests\n\nRun the following code below to test the application:\n\`\`\`\n${data.test}\n\`\`\`\n\n## Questions\n\nIf you have any questions and want to reach me, email me at <${data.email}>. Also, you can check out my repository [here](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;