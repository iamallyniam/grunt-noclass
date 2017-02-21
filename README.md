# grunt-noclass

> Remove class names from html files, usefull after inlining css for building mailers

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-noclass --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-noclass');
```

## The "noclass" task

### Overview
In your project's Gruntfile, add a section named `noclass` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  noclass: {
    options: {
      keepclasses : ['array', 'of', 'class', 'names']
    },
    files : [{
      expand : true,
      src : ["**/*.html"],
      cwd : 'src/files',
      dest : 'dest/files/'
    }]
  }
});
```

### Options

#### options.keepclasses
Type: `Array`
Default value: `[]`

An array of case sensitive class names that should remain in the files

### Usage Examples

```js
grunt.initConfig({
  noclass: {
    options: {
      keepclasses : ['save', 'safe']
    },
    files : [{
      expand : true,
      src : ["**/*.html"],
      cwd : 'src/files',
      dest : 'dest/files/'
    }]
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
