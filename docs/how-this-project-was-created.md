# Step by step 👣

* ✅ `npm i @angular/core`
* ✅ Create project structure (`app`, `public`)
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
* ✅ `npm i -D webpack-cli webpack`
    + `webpack-cli` is as tool which run `webpack`
    + `webpack` is a main logic of how to create bundle file
    + Create `webpack.config.js`
* ✅ `npm i -D ts-loader typescript`
    + `ts-loader` is a resolver of `*.ts` files
    + `typescript` is a package which compile TypeScript syntax to JavaScript
* ✅ `npx typescript --init`
    + Command will create file `tsconfig.json`
* ✅ `npm i rxjs`
    + Mandatory requirement
* ✅ `npm i @angular/platform-browser-dynamic`
* ✅ `npm i @angular/common`
* ✅ `npm i @angular/compiler`
* ✅ `npm i @angular/platform-browser`
* ✅ Resolve problems `In this configuration Angular requires Zone.js`
    + Install `npm i zone.js`
    + Add in `main.ts`:

        import 'zone.js';

* ✅ Resolve problem `Error: Can't resolve all parameters for ApplicationModule: (?).`

    Add in `main.ts`

        import 'core-js/es6/reflect';
        import 'core-js/es7/reflect';

* ✅ Create service `APIService.ts`
* ✅ Resolve problem: `compiler.js:2697 Uncaught Error: Can't resolve all parameters for AppComponent: (?).`

    In file `tsconfig.json` uncomment `experimentalDecorators` flag.
    In file `tsconfig.json` uncomment `emitDecoratorMetadata` flag.

* ✅ Resolve problem: `An async function or method in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option. [2705]`

    In file `tsconfig.json` uncomment `lib` list and put that list:

        "lib": [
            "es2015",
            "dom"
        ],

* ✅ Resolve problem with XHR request for HTML file (template)

    1. Install `npm i @types/node raw-loader`
    2. Use `require()` to load `*.html` file
    3. Add into `webpack.config.js` new rules with test regexp /\.html$/

* ✅ Resolve problem with XHR request for CSS files

    1. Install `npm i @types/node raw-loader`
    2. Use `require()` to load `*.css` files
    3. Add into `webpack.config.js` new rules with test regexp /\.css$/

* ✅ Resolve problem support SCSS files

    1. Install `npm i sass`
    2. Define task in `package.json`

        npm run build-styles: `sass app -o app`
        npm run watch-styles: `npm run build -- --watch`

    3. Ignore all `*.css` files

* ✅ Support display progress during creating bundle by Webpack

    1. Set property in `webpack.config.js` (https://webpack.js.org/configuration/stats/)

        stats: 'errors-only',

    2. Add plugins to display progress (https://www.npmjs.com/package/simple-progress-webpack-plugin)

        plugins: [
            new SimpleProgressWebpackPlugin()
        ],
