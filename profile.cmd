@echo off

echo adding ant to path
set PATH=%~d0%~p0lib\apache-ant-1.8.4\bin;%PATH%

echo adding nodejs to path
set PATH=%~d0%~p0lib\node;%PATH%

echo fixing grunt command
doskey grunt=grunt.cmd

echo adding phantomjs to path
set PATH=%~d0%~p0lib\phantomjs\phantomjs-1.8.1-windows;%PATH%

echo adding jruby to path
set PATH=%~d0%~p0lib\jruby\jruby-1.7.2\bin;%PATH%

echo ready
cls
