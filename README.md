# gulp-browsersync-node
File change watch and browser page reload with Gulp and Browsersync. Requires Node.js.

* Install Gulp globally:

```
npm install --global gulp-cli
```

* Create a package.json file in your project's root directory:

```
npm init
```

* Add Gulp and Browsersync to your project:

```
npm install browser-sync gulp --save-dev
```

* Configure gulpfile.js:

```
gulp.task('watch', function () // name your Gulp task
files: '*.css' // define the file directory and extention
host: 'localhost',
port: 8080 // define the host and port information
```

* Run the Gulp command followed by the task's name, for example:

```
gulp watch
```

Please note, you might need to reload the browser page manually to activate Browsersync.
