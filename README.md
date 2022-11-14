# Telnyx tests

## Requirements

 - [node.js](https://nodejs.org/)
 - [Cypress](https://cypress.io/)
 - [cypress-esbuild-preprocessor](https://www.npmjs.com/package/@bahmutov/cypress-esbuild-preprocessor)
 - [cypress-allure-plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
 - [cypress-if](https://github.com/bahmutov/cypress-if)

## Setup

1. Clone this repository to your local machine
2. Download node.js (preferable 16.x version)
3. Enter the following command to your terminal in the root folder:
      ```bash
       npm install
      ```

## Execute

You will find scripts to run the tests in the package.json file:

- To open cypress:
    `cypress:open`
- To run with new config:
    `cypress:newconfig`
- To generate allure report:
    `report:generate`
- To open allure report:
    `report:open`
- To clean report results:
    `report:clean`

