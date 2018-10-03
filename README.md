# metal

> Minimalistic React Starter with Hot Reloading and Express Server

- **[React](https://reactjs.org/)** (16.x) - A JavaScript library for building user interfaces
- **[Webpack](https://webpack.js.org/)** (4.x) - Bundle your assets, images, scripts, styles
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** - Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload
- **[React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)** - Tweak React components in real time
- **[Babel](http://babeljs.io/)** (7.x) - Babel is a JavaScript compiler
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Jest](https://jestjs.io/) - Delightful JavaScript Testing
- [Prettier](https://prettier.io/) - An opinionated code formatter

## Installation

1. Clone or Download repo
2. Run `yarn install` or `npm install`

## Usage

**Development**

`yarn run start` or `npm run start`

- Build app continously (HMR enabled)
- App served @ `http://localhost:3000`

<!-- **Production**

`yarn run start-prod` or `npm run start-prod`

- Build app once (HMR disabled)
- App served @ `http://localhost:3000`

--- -->

**All commands**

| Command          | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `yarn run build` | Build app to `/dist/` folder                                            |
| `yarn run lint`  | Check code formatting                                                   |
| `yarn run start` | Build app continously (HMR enabled) and serve @ `http://localhost:3000` |
| <!--             | `yarn run serve`                                                        | Build app once (HMR disabled) and serve @ `http://localhost:3000` | --> |
| `yarn run test`  | Run tests                                                               |


## See also

- [Isomorphic Webapp Starter](https://github.com/vikpe/isomorphic-webapp-starter)
- [Creact React apps with no build configuration](https://github.com/facebook/create-react-app)
