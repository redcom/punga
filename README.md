# Este [![Build Status](https://secure.travis-ci.org/steida/este.png?branch=master)](http://travis-ci.org/steida/este) [![Dependency Status](https://david-dm.org/steida/este.png)](https://david-dm.org/steida/este) [![devDependency Status](https://david-dm.org/steida/este/dev-status.png)](https://david-dm.org/steida/este#info=devDependencies)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/steida/este?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Robust and comfortable dev stack for [isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) web apps. [Mobile first](http://www.lukew.com/ff/entry.asp?933), [offline first](https://developer.chrome.com/apps/offline_apps), [frontend first](http://frontendfirst.com).

#### Demos
  - [TodoMVC](http://steida-este-todomvc.jit.su/), [repo](https://github.com/steida/este-todomvc)
  - [Songary](https://github.com/steida/songary), [repo](https://github.com/steida/songary)

#### Build with
  - [Google Closure](https://developers.google.com/closure/library/)
  - [Facebook React](http://facebook.github.io/react/)
  - [expressjs](http://expressjs.com/)
  - [este-library](https://github.com/steida/este-library)
  - [polymer-gestures](https://github.com/Polymer/polymer-gestures)

#### JavaScript
  - Plain old JavaScript, of course.
  - [React JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) - Don't use harmony class syntax yet please.
  - [CoffeeScript](coffeescript.org) (compatible with [Closure Compiler](https://developers.google.com/closure/compiler/)) - Why CoffeeScript? Isn't ES6 better? Maybe, but CoffeeScript works well for years already.

#### Styles
  - [Stylus](http://learnboost.github.io/stylus/) is recommended, sure you can use [LESS](https://github.com/plus3network/gulp-less) or anything else.

#### Tools
  - Well tuned [gulp](http://gulpjs.com) [dev stack](https://github.com/steida/gulp-este)
  - Super fast [file-watcher](https://github.com/steida/este-watch)
  - Awesome [DI Container](https://github.com/steida/gulp-closure-dicontainer)
  - Brilliant [Closure Compiler](https://developers.google.com/closure/compiler/)
  - TDD ready [Mocha](http://visionmedia.github.io/mocha)

#### TODO
  - Add more sophisticated demo with este-disptacher and more techniques from Songary. 

## Prerequisites
  [Java 1.7+](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and [Node.js](http://nodejs.org) are required.
  ```shell
  npm install -g gulp
  npm install -g bower
  ```

For Windows users, because jsdom installation sucks, you have to install Visual Studio Express 2012 C++ (it's free) before. Remember, install right 32/64 bit versions depending on your Windows.

## Getting Started

### Create Este App

  ```shell
  git clone https://github.com/steida/este.git este-app
  cd este-app
  npm install
  bower install
  ```

### Start Development

  - run ```gulp```
  - point your browser to [localhost:8000](http://localhost:8000)
  - build something beautiful

## Usage

  Start development. Build app and run development stack.

  ```gulp ```

  Production mode. Styles are minified and scripts are compiled.

  ```gulp --production``` or ```gulp -p```

  Only build. Useful for continuous integration.

  ```gulp build``` or ```gulp build --production```

  Run development stack. Useful to skip building phase.

  ```gulp run``` or ```gulp run --production```

  Debug makes compiled scripts readable.

  ```gulp build --production=debug```

### Recommended Editor: [Atom.io](http://atom.io)

Recommended [settings](https://github.com/steida/atom-io-settings).

### Error: EMFILE Issue

OSX has default limit for opened files set to 256. Fix it with ```ulimit -n 10000```

## Stay Tuned

  - [twitter.com/estejs](https://twitter.com/estejs)
  - [medium.com/@steida](https://medium.com/@steida)
  - [facebook.com/groups/110240425784074](https://www.facebook.com/groups/110240425784074/)
  - [groups.google.com/forum/#!forum/estejs](https://groups.google.com/forum/#!forum/estejs)

## Future

Integrate ES6, definitely. Add and decribe more functional patterns, like Flux or CSP. More mobile/offline awareness. 

## License
Copyright (c) 2013 Daniel Steigerwald

Licensed under the MIT license.
