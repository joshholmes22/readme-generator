const getContentSection = (answers) => {
  return `# ${answers.projectTitle} ![${
    answers.license
  }](https://img.shields.io/badge/${answers.license}-License-green)
## Table of Contents
- [Description](#description)
${answers.isInstallation ? "- [Installation](#installation)" : ""}
${answers.isUsage ? "- [Usage](#usage)" : ""}
- [License](#license)
${answers.isContributing ? "- [Contributions](#contributions)" : ""}
${answers.isTest ? "- [Tests](#tests)" : ""}
- [Questions](#questions)`;
};

const getDescriptionSection = (answers) => {
  return `
## Description
${answers.projectDescription}`;
};

const getInstallSection = (answers) => {
  return `
## Installation
Please follow the instructions below:
\`\`\`
${answers.installation}
\`\`\`
`;
};

const getUsageSection = (answers) => {
  return `
## Usage
Please follow the instructions below:
\`\`\`
${answers.usage}
\`\`\`
`;
};

const getLicenseSection = (answers) => {
  return `
## License
${answers.license} License
`;
};

const getContributingSection = (answers) => {
  return `
## Contributions
${answers.contributing}
    `;
};

const getTestSection = (answers) => {
  return `
## Tests
Please follow the instructions below:
\`\`\`
${answers.test}
\`\`\`
    `;
};

const getQuestionsSection = (answers) => {
  return `
## Questions
Please contact me on my email: ${answers.email} \n
Visit my GitHub profile [here](${answers.github})
    `;
};

module.exports = {
  getContentSection,
  getDescriptionSection,
  getInstallSection,
  getUsageSection,
  getLicenseSection,
  getContributingSection,
  getTestSection,
  getQuestionsSection,
};
