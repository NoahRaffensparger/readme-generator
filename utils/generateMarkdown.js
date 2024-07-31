// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    if(license == 'GNU AGPLv3'){
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    } else if(license == 'GNU GPLv3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if(license == 'GNU LGPLv3') {
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    } else if(license == 'Mozilla Public License 2.0') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else if(license == 'Apache License 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if(license == 'MIT License') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if(license == 'Boost Software License 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if(license == 'The Unlicense') {
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    }
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    if(license == 'GNU AGPLv3'){
      return 'https://choosealicense.com/licenses/agpl-3.0/'
    } else if(license == 'GNU GPLv3') {
      return 'https://choosealicense.com/licenses/gpl-3.0/'
    } else if(license == 'GNU LGPLv3') {
      return 'https://choosealicense.com/licenses/lgpl-3.0/'
    } else if(license == 'Mozilla Public License 2.0') {
      return 'https://choosealicense.com/licenses/mpl-2.0/'
    } else if(license == 'Apache License 2.0') {
      return 'https://choosealicense.com/licenses/apache-2.0/'
    } else if(license == 'MIT License') {
      return 'https://choosealicense.com/licenses/mit/'
    } else if(license == 'Boost Software License 1.0') {
      return 'https://choosealicense.com/licenses/bsl-1.0/'
    } else if(license == 'The Unlicense') {
      return 'https://choosealicense.com/licenses/unlicense/'
    }
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Was not clear about what to put here
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[How to Contribute](#contribute)

[Tests](#tests)

[Questions](#questions)

## <a id='description'></a>Description

${renderLicenseBadge(data.license)}
${data.description}

## <a id='installation'></a>Installation

${data.install}

## <a id='usage'></a>Usage

${data.info}

## <a id='license'></a>License

${data.license}
${renderLicenseLink(data.license)}

## <a id='contribute'></a>How to Contribute

${data.contribution}

## <a id='tests'></a>Tests

${data.test}

## <a id='questions'></a>Questions

My GitHub: https://github.com/${data.username}

Please reach out to me at: ${data.email}
`;
}


module.exports = {
  generateMarkdown
}