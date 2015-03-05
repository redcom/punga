# Este.js

> Robust and comfortable dev stack for isomorphic web apps. Forget about over-abstracted frameworks, use sheer libraries and leverage standards.

[![Circle CI](https://circleci.com/gh/steida/este.svg?style=svg)](https://circleci.com/gh/steida/este)
[![Join the chat at https://gitter.im/steida/este](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/steida/este)
[![Dependency Status](https://david-dm.org/steida/este.png)](https://david-dm.org/steida/este)
[![devDependency Status](https://david-dm.org/steida/este/dev-status.png)](https://david-dm.org/steida/este#info=devDependencies)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Techniques

- ES6 and future JavaScripts via [babeljs.io](https://babeljs.io/), JSX and flowtype syntax supported as well.
- Server side rendering.
- Mobile first, offline first, frontend first.
- Localization with [formatjs.io](http://formatjs.io/), stale browsers supported as well.
- React with Flux with immutable global app state.
- Isomorphic architecture with stateless actions and stores.
- Still vanilla Flux. You don't need over-abstracted frameworks.
- Webpack css livereaload with hot module reload even for React components.
- Easy undo/redo and app state load/save.
- Super fast performance with immutable.js.
- Well tuned webpack devstack.
- Stylesheets can be CSS, LESS, SASS or Stylus.

## Prerequisites

Install [iojs](https://iojs.org/) or [node.js](http://nodejs.org).
Then install [gulp.js](http://gulpjs.com/).
```shell
npm install -g gulp
```

## Create App

```shell
git clone https://github.com/steida/este.git myapp
cd myapp
npm install
```

## Start Development

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)
- build something beautiful

## Other Dev Tasks

- `gulp` or `npm run dev` run app in development mode
- `gulp -p` or `npm start` run app in production mode
- `gulp build -p` or `npm run build` just build app for continuous integration
- `gulp test` or `npm test` run tests

## Examples

- [Este TodoMVC](https://github.com/steida/este-todomvc)

## Todo

* [ ] [Jest](https://facebook.github.io/jest)
* [ ] [ESLint](http://eslint.org/), almost [ready](https://github.com/eslint/espree/issues/10)
* [ ] [flowtype](http://flowtype.org/)
* [ ] Sync app state across browser tabs/windows via [broadcastpubsub.js](http://goo.gl/Pt8NFQ)
* [ ] Global errors handling with several last app states reporting.
* [ ] Consider async actions and [CSP channels](https://github.com/ubolonton/js-csp), [video](https://www.youtube.com/watch?v=W2DgDNQZOwo&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=6).
* [ ] [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
* [ ] React 0.13 [plain JS class](http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#plain-javascript-classes). It supports immutable.js out of the box.
* [ ] Optional Closure Tools support.
* [ ] Async and pendings actions.
* [ ] React inline styles with tools.
* [ ] Add responsiveness.
* [ ] Add gestures.

## Tips and Tricks and Lips and Tits

- With global immutable app state, you don't need IoC container. [SOLID: the next step is Functional ](http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional).
- Use `const` for CONSTANTS or immutable structures.
- Always use React propTypes.
- Never mock browser inside server code, it can confuse isomorphic libraries.
- Always use settostring helper.
- [aeflash.com/2015-02/react-tips-and-best-practices.html](http://aeflash.com/2015-02/react-tips-and-best-practices.html)

## Credit

made by [twitter.com/steida](https://twitter.com/steida)
