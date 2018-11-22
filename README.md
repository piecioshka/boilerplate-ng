# ng-starter

[![npm version](https://badge.fury.io/js/ng-starter.svg)](https://badge.fury.io/js/ng-starter)
[![downloads count](https://img.shields.io/npm/dt/ng-starter.svg)](https://www.npmjs.com/~piecioshka)
[![travis](https://img.shields.io/travis/piecioshka/ng-starter.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/ng-starter)
[![dependencies](https://david-dm.org/piecioshka/ng-starter.svg)](https://github.com/piecioshka/ng-starter)
[![coveralls](https://coveralls.io/repos/github/piecioshka/ng-starter/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/ng-starter?branch=master)

:hammer: Simple Angular starter

## Features

### Setup app

* :white_check_mark: `npm i @angular/core`
* :white_check_mark: Create project structure (`app`, `public`)
    + app/components/app.components.html
        - Write markup
    + app/components/app.components.ts
        - Create class
        - Decorate with `@Component`
    + app/module/app.module.ts
        - Create class
        - Decorate with `@NgModule`
        - Import `@Component` and put intro: declarations & bootstrap
    + app/main.ts
        - Import `@NgModule`
* :white_check_mark: `npm i -D webpack-cli webpack`
    + `webpack-cli` is as tool which run `webpack`
    + `webpack` is a main logic of how to create bundle file
    + Create `webpack.config.js`
* :white_check_mark: `npm i -D ts-loader typescript`
    + `ts-loader` is a resolver of `*.ts` files
    + `typescript` is a package which compile TypeScript syntax to JavaScript
* :white_check_mark: `npx typescript --init`
    + `tsconfig.json` create this file automatically
* :white_check_mark: Use Decorators in `tsconfig.json` file
    + uncomment `experimentalDecorators`
* :white_check_mark: `npm i rxjs`
    + Mandatory requirement
* :white_check_mark: `npm i @angular/platform-browser-dynamic`
* :white_check_mark: `npm i @angular/common`
* :white_check_mark: `npm i @angular/compiler`
* :white_check_mark: `npm i @angular/platform-browser`
* :white_check_mark: `???`
    + Problem with XHR request for HTML file with template
* :white_check_mark: `npm i zone.js`
    + Resolve problem `In this configuration Angular requires Zone.js`
    + Add in `main.ts` that line: `import 'zone.js';`

## Usage

1. Clone project

    ```bash
    git clone git@github.com:piecioshka/ng-starter.git
    ```

2. Remove current remote

    ```bash
    git remote remove origin
    ```

3. Add your custom remote

    ```bash
    git remote add origin YOUR_CUSTOM_REMOTE
    ```

4. Add commits and pushes!

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
