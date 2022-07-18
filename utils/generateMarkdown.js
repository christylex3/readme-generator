// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseBadge;

function renderLicenseBadge(license) {

//   if () {

//   } else if (data.license == "Mit License") {
//     licenseBadge = ![GitHub](https://img.shields.io/github/license/christylex3/readme-generator);
//   } else {

//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n${data.description}\n
  ## Table of Contents\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contribution](#contribution)\n
  * [Tests](#tests)\n
  * [Questions](#questions)\n
  ## Installation\n${data.installation}\n
  ## Usage\n${data.usage}\n
  ## License\nThis application is licensed under ${data.license}\n
  ## Contribution\n${data.contribution}\n
  ## Tests\n${data.test}\n
  ## Questions\nIf you have any questions and want to reach me, contact me here at [${data.githubUsername}@github.com](github.com/${data.githubUsername}) or ${data.email}.
`;
}

module.exports = generateMarkdown;
