# Mithril App and Authentication Sample

We are going to learn how to create a Conference Tracker Web App using the tiny yet mighty [Mithril framework](https://mithril.js.org/) &mdash; not be confused with the [fantasy metal](https://en.wikipedia.org/wiki/Mithril) from _Lord of the Rings_. Auth0's Universal Login will power its user authentication layer &mdash; provide proper credentials or... _You Shall Not Pass_! 

The project is created from scratch using a combination of modern JavaScript and JSX. An easy to understand and extend Webpack configuration is included to provide transpiling, style loading, app serving and hot reloading to the project. 

## Dependencies

* [Node.js](https://nodejs.org/en/) >= 6
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/)

## Installation

1. Clone this project or download it to your system.

2. Make the project folder your current directory. 

3. Install the required Node packages by running `npm install` or `yarn`.

4. Once the installation is complete, start the project by running `npm start` or `yarn start`. This will open a new tab or window in your default browser and load the web application at `localhost:8080`. 

## Production Build

To build a production version of the project run: 

```bash
yarn build
```

or

```bash
npm run build
```

Webpack will create a `dist` folder with an optimized production bundle. 

## Project Structure

Project working files are placed under the `src` folder. Within the `src` folder, files are organized according to their function in the context of the application. This ideal is represented through the following subfolders and files:

* `components`: It contains all the components that are used to build the application interface. Within this folder, components are categorized and grouped in folders that represent their common functionality &mdash; such as `ui` and `layout`. 
* `services`: It contains business logic that may need to be shared across more than one component. Instead of packing extensive logic within a component, that logic should be made a service and imported by the component that needs it.
* `store`: It holds mock data but may as well hold constructs that manage the state of the application built with libraries such as `rxjs` or `redux`. 
* `index.js`: It's the entry point of the application. The core logic of the application such as the `m.router`, `m.render` or `m.mount` reside here. The interface is composed from the different components and rendered here.
* `index.css`: It holds application-wide styling. Feel free to modify the styling or extend it.

In the root folder, we also find these key files:

* `index.html`: It's the core template for the application where our composed interface will be rendered. The hook in `index.html` where the interface is attached is `<div id="app">`. Our JavaScript logic is bundled by Webpack and made available to `index.html` through `<script src="/bundle.js">`.
* `.babelrc`: It holds all the Babel configuration that allows us to transpile modern JS and JSX into browser compatible JS. 
* `webpack.config.js`: It holds the webpack configuration. For deeper information on what's going on here, feel free to explore the [Webpack docs](https://webpack.js.org/).


## Authentication

To run the application successfully you need to have an active Auth0 account to provide the needed data to allow the application to talk to Auth0.

> To see how Auth0 integrates with the application checkout the `auth` branch.  

### What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

### Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to log in.


### Create a Client

1. In the Auth0 Dashboard click on "New Client".
2. Give the client a name. 
3. Choose "Single Page Web Applications" as the client type.
4. Choose "React" as the web app technology since it has a similar architecture to Mithril.
5. In the guide, scroll down to "Create an Authentication Service" and notice the configuration values within the `Auth` class. 
6. Create a new file called `auth0-variables.js` under the `services` folder. 
7. Within `auth0-variables.js` create and export an object with properties that map to the Auth0 web configuration data:

```javascript
const AUTH0 = {
  CLIENTID: '<your client id>',
  DOMAIN: '<your domain>',
  CALLBACKURL: '<your callback URL>',
  AUDIENCE: '<your audience URL>'
};

export default AUTH0;
```
8. As an important step, add `auth0-variables.js` to the `.gitignore` file so that it's never committed to source control.
9. Back in the Auth0 Dashboard, click on `Settings` under the client's name and scroll down till you find "Allowed Callback URLs". 
10. Paste your desired callback URL here &mdash; it may be your localhost address where the project is being run locally &mdash; and save the settings.

You are now ready to see the application working to its full extent!


## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
