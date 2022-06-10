// imports
const inquirer = require("inquirer");
const fs = require("fs");
const generateFunctions = require("./utils/generateFunctions");

// Questions array
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project title:",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please enter a description of your project:",
  },
  {
    type: "confirm",
    name: "isInstallation",
    message: "Would you like to enter installation instructions?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter your installation instructions:",
    when: (answers) => {
      return answers.isInstallation;
    },
  },
  {
    type: "confirm",
    name: "isUsage",
    message: "Would you like to enter usage instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your usage instructions:",
    when: (answers) => {
      return answers.isUsage;
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT", "Apache", "GNU", "Other"],
  },
  {
    type: "confirm",
    name: "isContributing",
    message: "Would you like to enter any contributions?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your contributions:",
    when: (answers) => {
      return answers.isContributing;
    },
  },
  {
    type: "confirm",
    name: "isTest",
    message: "Would you like to enter testing instructions?",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter your testing instructions:",
    when: (answers) => {
      return answers.isTest;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub profile link:",
  },
];

// generate Readme file
const generateReadme = (answers) => {
  return `${generateFunctions.getContentSection(answers)} \n
    ${generateFunctions.getDescriptionSection(answers)} \n
    ${
      answers.isInstallation ? generateFunctions.getInstallSection(answers) : ""
    }
    ${answers.isUsage ? generateFunctions.getUsageSection(answers) : ""}
    ${generateFunctions.getLicenseSection(answers)}
    ${
      answers.isContributing
        ? generateFunctions.getContributingSection(answers)
        : ""
    }
    ${answers.isTest ? generateFunctions.getTestSection(answers) : ""}
    ${generateFunctions.getQuestionsSection(answers)}
    `;
};

const init = async () => {
  // get answers for first set of questions
  const answers = await inquirer.prompt(questions);

  // display answers
  const content = generateReadme(answers);

  // write to file
  fs.writeFileSync("./generated-readme.md", content);
};

init();
