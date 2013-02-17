/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PARANORMAL - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* https://github.com/bboyle/paranormal\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Ben Boyle; Licensed MIT */'
    },

    // QA
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/*.js', 'features/**/*.js']
    },

    qunit: {
      files: ['test/**/*.html']
    },

    cucumberjs: {
      executable: "../../cucumber", // relative to node_modules/grunt-cucumber/bin?
      features: "features",
      steps: "features/step_definitions",
      tags: "@dev"
    },


    // prepping for production
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/PARANORMAL.js>'],
        dest: 'dist/PARANORMAL.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/PARANORMAL.min.js'
      }
    },

    // config
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });


  // load libs
  grunt.loadNpmTasks('grunt-cucumber');

  // run all tests
  grunt.registerTask('test', 'lint qunit cucumberjs');

  // Default task.
  grunt.registerTask('default', 'test concat min');

};
