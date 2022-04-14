# quiz-sdk
This library available at [whjr-quiz-sdk](https://libraries.io/npm/whjr-quiz-sdk)

## Brief:

Quiz is a common feature used across Byju ecosystem companies like Whitehat, Byju, Toppr. So there was a need to unify the effort to make a World class Quiz Platform to be consumed by each company.

## Important Instruction 

1. if any operationId in swagger-doc is added or updated, please update the serverhandler in mock to avoid UT failing.
2. if you add any new type of question, please add max-attempt-limit in `utils/getValidAttemptsNoForQuestion` file.
3. Please use the svg for icon, if icon can be used in many place by just changing the color. see step in `shared/icons/index` file.

## Installation / requirements

1. nvm (node package manager)
2. yarn (npm i yarn -g)

## Tech Stack

- **Package Manager**: Yarn
- **UI Library**: React
- **Scripting Language**: Typescript
- **Unit test case library**: React-testing-library and Jest
- **CICD integration**: gitlab
- **i18n**: react-intl
- **Data Analytics**: Segment
- **Behavior analytics**: Segment(Hotjar)
- **Error, alerts and Monitoring**: Datadog
- **API lib for graphql**: React apollo graphql
- **API lib for rest**: Swagger client 
- **CSS framework**: Tailwind CSS
- **Components visualization**: Storybook
- **Visual testing**: Chromatic

## available scripts

In the project directory, you can run

### `nvm use && yarn start`

Runs the app in the development mode
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.

### `nvm use && yarn test`

Launches the test runner in the interactive watch mode.


### `nvm use && yarn twc-build`

To create the css file with all available classes before start of development.\
It is also in-build with `start` and 'babel-build` script

### `nvm use && yarn babel-build`

it is for final package build which create `dist` folder.


## Important file and folders

1. `src/lib`  main folder for our code
    - `apis` : contain swagger and apollo client and responsible for API call
    - `assets` : for images and svgs
    - `components` : contains all component for all pages
    - `constants` : contain constants for testing role-label, data-testid, app
    - `lang` : have all language files for internationlization
    - `pages` : contain all pages
    - `themes` : conatin theme like default, dark
    - `typings`: have configuration for typescript type for packages
    - `utils`:  conatin important helper function like get, coookie, timeWorker ...
    - `index.css` : main glocal css file with `all classes` while dev mode and `used classes` for production mode
    - `index.ts` : entry point for our package
2. `src/condig/key`  file for client custom variable like theme, apollo-client url, quiz-id, tenantid
3. `src/index/tsx`   file that is Entry point for our library
4. `src/tailwind.css`  file for all tailwindcss in-build and custom classes
5. `src/setupTests.ts` file to setup environment for test, mocking for browser API like web-worker, localStorage
6. `tailwind.config.js`  very important file to add custom color, variant

## Contributors

1. Amrendra Kumar(Tech Lead)
2. Sheru Khan(Software Engineer)


## License

All rights reserved under WhiteHatjr.