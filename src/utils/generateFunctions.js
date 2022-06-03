const getContentSection = (answers) => {
  return `# ${answers.projectTitle} ![${
    answers.license
  }](https://img.shields.io/badge/${answers.license}-License-green)
## Table of Contents
- [Description](#description)
${answers.isInstallation ? "- [Installation](#installation)" : ""}
${answers.isUsage ? "- [Usage](#usage)" : ""}
- [License](#license)
${answers.isContributing ? "- [Contributing](#contributing)" : ""}
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

// ## Description
// ${answers.projectDescription}${
//     answers.isInstallation ? getInstall(answers) : null
//   }`;

module.exports = {
  getContentSection,
  getDescriptionSection,
  getInstallSection,
};
