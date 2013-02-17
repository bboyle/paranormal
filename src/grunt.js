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
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
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

  // run all tests
  grunt.registerTask('test', 'lint qunit');

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
