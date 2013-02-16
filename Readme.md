PARANORMAL
==========

A paradev experiment in creating a UX testing framework that:
* can run in restrictive environments
* is friendly for web developers with limited testing experience

Assumptions
-----------

* The environment is probably windows, without dev tools (e.g. no cygwin)
* Java is available
* Downloading files may be possible, but probably isn't (store libs in this repo?)
* This repo can be zipped and is useful offline (see above)
* Portable web browsers are available (see above)
* JavaScript is more familiar to users than other programming languages
* Cucumber (BDD) would be nice for the ease of reading/writing Gherkin
* Multiple test frameworks may work better than a single one
* People are not afraid to learn a little to get something working.

Starting with…
--------------

* *ant* (java based) to download and manage other files
* *gruntjs* (node required) for integrated jshint and qunit tests
