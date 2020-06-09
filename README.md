[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# ![RealWorld Example App](./static/rwv-logo.png)

> Vue.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

Project demo is available at https://vue-vuex-realworld.netlify.app/

This codebase was created to demonstrate a fully fledged fullstack application built with **Vue.js** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **Vue.js** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Getting started

Before contributing please read the following:

1. [RealWorld guidelines](https://github.com/gothinkster/realworld/tree/master/spec) for implementing a new framework,
2. [RealWorld frontend instructions](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md)
3. [Realworld API endpoints](https://github.com/gothinkster/realworld/tree/master/api)
4. [Vue.js styleguide](https://vuejs.org/v2/style-guide/index.html). Priority A and B categories must be respected.
5. [Editorconfig setup](https://editorconfig.org/#download). Most of the common editors support editorconfig by default (check the editorconfig download link for your ide), but editorconfig npm package have to installed globally for it to work,

```bash
# install editorconfig globally
> npm install -g editorconfig
```

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
yarn test
```

## To know

Current arbitrary choices are:

- Vuex modules for store
- Vue-axios for ajax requests
- 'rwv' as prefix for components

These can be changed when the contributors reach a consensus.

## FAQ

<p><details>
  <summary><b>Where can I find the service worker file?</b></summary>

  The service worker file is generated automatically. The implementation can be found under [`src/registerServiceWorker.js`](https://github.com/gothinkster/vue-realworld-example-app/blob/eeaeb34fa440d00cd400545301ea203bd2a59284/src/registerServiceWorker.js). You can find the dependencies implementation in this repo: [yyx990803/register-service-worker](https://github.com/yyx990803/register-service-worker#readme).

  Also, Google provided a good documentation on how to register a service worker: https://developers.google.com/web/fundamentals/primers/service-workers/registration
</details></p>

<p><details>
  <summary><b>Vue.js Function API / Migration to Vue.js 3</b></summary>

  Related resources:

  - [Vue.js Function API RFC](https://github.com/vuejs/rfcs/blob/function-apis/active-rfcs/0000-function-api.md)
  - [`vue-function-api` plugin](https://github.com/vuejs/vue-function-api)

  Vue.js 3 will likely introduce breaking changes on how Vue.js applications will look like. For example, the Vue.js Function API might be introduced. This would cause a lot of our components to change in the overall structure. The changes would be minimal though. With the `vue-function-api` plugin, these changes could be applied already. The problem is that multiple integrations are not working with the plugin. There are intentions to make this work, but for the time being, we should rather focus on different areas. If you still want to be experimental with it, we are happy to get a Pull Request with some experimental feature implementations.
</details></p>

## Connect

Join us on [Discord](https://discord.gg/NE2jNmg)
