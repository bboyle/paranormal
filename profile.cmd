@echo off

echo set DEV environment
set TEST_ENV=DEV

echo adding ant to path
set PATH=%~d0%~p0lib\apache-ant-1.9.0\bin;%PATH%

echo adding nodejs to path
set PATH=%~d0%~p0lib\node;%PATH%

echo adding jruby to path
set PATH=%~d0%~p0lib\jruby\jruby-1.7.9\bin;%PATH%

echo adding webdriver to path
set PATH=%~d0%~p0lib\chromedriver;%PATH%
set PATH=%~d0%~p0lib\IEDriverServer;%PATH%

echo linux command aliases
doskey ls=dir

echo ready
cls
