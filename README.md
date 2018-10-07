[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# ![RealWorld Example App](./static/rwv-logo.png)

> Vue.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

Project demo is available at https://vue-vuex-realworld.netlify.com/#/

This codebase was created to demonstrate a fully fledged fullstack application built with **Vue.js** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **Vue.js** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Getting started

Before contributing please read the following:

1. [RealWorld guidelines](https://github.com/gothinkster/realworld/tree/master/spec) for implementing a new framework,
2. [RealWorld frontend instructions](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md)
3. [Realworld API endpoints](https://github.com/gothinkster/realworld/tree/master/api)
4. [Vue.js styleguide](https://vuejs.org/v2/style-guide/index.html). Priority A and B categories must be respected.

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack) so to get started all you have to do is:

``` bash
# install dependencies
> yarn install
# serve with hot reload at localhost:8080
> yarn serve
```

Other commands available are:

``` bash
# build for production with minification
yarn run build

# run unit tests
yarn run test:unit
```

# To know

Current arbitrary choices are:

- Vuex modules for store
- Vue-axios for ajax requests
- Standard for linting
- 'rwv' as prefix for components

These can be changed when the contributors reach a consensus.

# Connect

Join us on [Discord](https://discord.gg/NE2jNmg)
