# ![RealWorld Example App](./static/logo.png)

### Vue.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

#### [Demo](https://demo.realworld.io/#/)


This codebase was created to demonstrate a fully fledged fullstack application built with **Vue.js** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **Vue.js** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.



# Getting started

Before contributing please read the official [guidelines](https://github.com/gothinkster/realworld/tree/master/spec) for implementing a new framework, as well as the [Frontend instructions](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md).
We abide by the Vue.js [styleguide](https://vuejs.org/v2/style-guide/index.html). Priority A and B categories must be respected.

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack) so to get started all you have to do is:
``` bash
# install dependencies
> npm install
# serve with hot reload at localhost:8080
> npm run dev
```

Other commands available are:
``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# To know

Current arbitrary choices are:
- Vuex modules for store
- Vue-axios for ajax requests
- Standard for linting
- 'rwv' as prefix for components

These can be changed when the contributors reach a consensus.
