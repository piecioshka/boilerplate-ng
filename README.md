# ng-starter

[![npm version](https://badge.fury.io/js/ng-starter.svg)](https://badge.fury.io/js/ng-starter)
[![downloads count](https://img.shields.io/npm/dt/ng-starter.svg)](https://www.npmjs.com/~piecioshka)
[![travis-ci](https://api.travis-ci.com/piecioshka/ng-starter.svg?branch=master)](https://app.travis-ci.com/github/piecioshka/ng-starter)

:hammer: Simple Angular starter

## Features

* :white_check_mark: Create empty Angular app

## Step by step 👣

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
    + Command will create file `tsconfig.json`
* :white_check_mark: `npm i rxjs`
    + Mandatory requirement
* :white_check_mark: `npm i @angular/platform-browser-dynamic`
* :white_check_mark: `npm i @angular/common`
* :white_check_mark: `npm i @angular/compiler`
* :white_check_mark: `npm i @angular/platform-browser`
* :white_check_mark: Resolve problems `In this configuration Angular requires Zone.js`
    + Install `npm i zone.js`
    + Add in `main.ts`:

        import 'zone.js';

* :white_check_mark: Resolve problem `Error: Can't resolve all parameters for ApplicationModule: (?).`

    Add in `main.ts`

        import 'core-js/es6/reflect';
        import 'core-js/es7/reflect';

* :white_check_mark: Create service `APIService.ts`
* :white_check_mark: Resolve problem: `compiler.js:2697 Uncaught Error: Can't resolve all parameters for AppComponent: (?).`

    In file `tsconfig.json` uncomment `experimentalDecorators` flag.
    In file `tsconfig.json` uncomment `emitDecoratorMetadata` flag.

* :white_check_mark: Resolve problem: `An async function or method in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option. [2705]`

    In file `tsconfig.json` uncomment `lib` list and put that list:

        "lib": [
            "es2015",
            "dom"
        ],

* :white_check_mark: Resolve problem with XHR request for HTML file (template)

    1. Install `npm i @types/node raw-loader`
    2. Use `require()` to load `*.html` file
    3. Add into `webpack.config.js` new rules with test regexp /\.html$/

* :white_check_mark: Resolve problem with XHR request for CSS files

    1. Install `npm i @types/node raw-loader`
    2. Use `require()` to load `*.css` files
    3. Add into `webpack.config.js` new rules with test regexp /\.css$/

* :white_check_mark: Resolve problem support SCSS files

    1. Install `npm i sass`
    2. Define task in `package.json`

        npm run build-styles: `sass app -o app`
        npm run watch-styles: `npm run build -- --watch`

    3. Ignore all `*.css` files

* :white_check_mark: Support display progress during creating bundle by Webpack

    1. Set property in `webpack.config.js` (https://webpack.js.org/configuration/stats/)

        stats: 'errors-only',

    2. Add plugins to display progress (https://www.npmjs.com/package/simple-progress-webpack-plugin)

        plugins: [
            new SimpleProgressWebpackPlugin()
        ],

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
