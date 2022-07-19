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
    return `* [License](#license)\n\n`;
  }
  return ``;
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "None") {
    return `## License\nThis application is licensed under ${data.license}.\n\n`
  }
  return ``;
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n${renderLicenseBadge(data)}## Description\n${data.description}\n\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n${renderLicenseLink(data)}* [Contribution](#contribution)\n* [Tests](#tests)\n* [Questions](#questions)\n\n## Installation\n\`\`\`\n${data.installation}\n\`\`\`\n\n## Usage\n${data.usage}\n\n${renderLicenseSection(data)}## Contribution\n${data.contribution}\n\n## Tests\n${data.test}\n\n## Questions\nIf you have any questions and want to reach me, contact me here at [${data.githubUsername}@github.com](https://github.com/${data.githubUsername}) or [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;