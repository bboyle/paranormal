PARANORMAL
==========

A paradev experiment in creating a UX testing framework that:
* can run in restrictive environments
* is friendly for web developers with limited testing experience


Assumptions
-----------

* The environment is probably windows, without dev tools (e.g. no cygwin)
* Java is available
* Downloading files may be possible, but probably isn't—especially from command line package managers: e.g. npm, gem
* This repo can be zipped and is useful offline
* Portable web browsers are available
* JavaScript is more familiar to users than other programming languages
* Cucumber (BDD) would be nice for the ease of reading/writing Gherkin
* Multiple test frameworks may work better than a single one
* People are not afraid to learn a little to get something working.


Starting with…
--------------

* *ant* (java based) to download and manage other files
* *gruntjs* (node required) for integrated jshint and QUnit tests
* *jruby* for cucumber and watir-webdriver
* *python* has been added in this branch (for personal interest)


Getting started
---------------

If you are able to download and run this repo, the included ant build file will download other dependencies for you.
But given this repo is for environments that are restrictive, you probably want to grab the files.

1. Create a folder for the paranormal environment
2. This folder should contain:
   * [prompt.cmd and profile.cmd][paranormal-prompt] files from this repo
   * a lib folder containing:
     * node—node with packages for a grunt development environment ([node+packages (zipped)][paranormal-grunt])
     * jruby—jruby with ruby gems for cucumber, watir-webdriver, syntax and compass ([jruby+gems (zipped)][paranormal-jruby])
     * [apache-ant-1.9.0][ant]—optional (I find it useful for file management including copy, concat, regexp, xslt and zip support)
     * [python][python]—optional (I am learning it for personal interest)
3. Create a separate folder for your project
4. Start with the [sample project][paranormal-sample-project] which includes:
   * specific grunt packages: concat, uglify, watch, jshint, qunit, connect, rcukes, csslint and compass
   * sample qunit tests and jshint config files
   * sample cucumber test
   * sample grunt configuration
5. Double click `prompt.cmd` to open a new prompt and type `grunt` to run.

[paranormal-prompt]: https://dl.dropbox.com/u/15743075/paranormal/paranormal-env-prompt.zip
[paranormal-grunt]: https://dl.dropbox.com/u/15743075/paranormal/paranormal-env-grunt.zip
[paranormal-jruby]: https://dl.dropbox.com/u/15743075/paranormal/paranormal-env-jruby.zip
[paranormal-sample-project]: https://dl.dropbox.com/u/15743075/paranormal/paranormal-sample-project.zip
[ant]: http://ant.apache.org/


What are the tools?
-------------------

| Tool                               | Package                            | Description                               |
|:-----------------------------------|:-----------------------------------|:------------------------------------------|
| [compass]                          | ruby gem + [grunt-contrib-compass] | CSS build tool                            |
| [csslint]                          | [grunt-contrib-csslint]            | CSS style and syntax checker              |
| [cucumber]                         | ruby gem + [grunt-rcukes]          | Behaviour driven development testing tool |
| [grunt]                            | -                                  | Project build tool (built on node)        |
| [JSHint][jshint]                   | [grunt-contrib-jshint]             | Javascript style and syntax checker       |
| [MiniTest][minitest]               | -                                  | Ruby assertion framework                  |
| [QUnit][qunit]                     | [grunt-contrib-qunit]              | Javascript unit test tool                 |
| [UglifyJS][uglifyjs]               | [grunt-contrib-uglify]             | Javascript minification tool              |
| [Watir WebDriver][watir-webdriver] | ruby gem                           | Drives a web browser for automated tests  |

[compass]: http://compass-style.org/
[csslint]: https://github.com/stubbornella/csslint/
[cucumber]: http://cukes.info/
[grunt]: http://gruntjs.com/
[grunt-contrib-clean]: https://github.com/gruntjs/grunt-contrib-clean
[grunt-contrib-concat]: https://github.com/gruntjs/grunt-contrib-concat
[grunt-contrib-connect]: https://github.com/gruntjs/grunt-contrib-connect
[grunt-contrib-compass]: https://github.com/gruntjs/grunt-contrib-compass
[grunt-contrib-csslint]: https://github.com/gruntjs/grunt-contrib-csslint
[grunt-contrib-jshint]: https://github.com/gruntjs/grunt-contrib-jshint
[grunt-contrib-qunit]: https://github.com/gruntjs/grunt-contrib-qunit
[grunt-contrib-uglify]: https://github.com/gruntjs/grunt-contrib-uglify
[grunt-contrib-watch]: https://github.com/gruntjs/grunt-contrib-watch
[grunt-rcukes]: https://github.com/jrcryer/grunt-rcukes
[jshint]: http://www.jshint.com/
[minitest]: http://www.ruby-doc.org/stdlib-1.9.3/libdoc/minitest/unit/rdoc/MiniTest.html
[python]: http://python.org/
[qunit]: http://qunitjs.com/
[uglifyjs]: http://lisperator.net/uglifyjs/
[watir-webdriver]: http://watirwebdriver.com/
