@echo off

echo adding ant to path
set PATH=%~d0%~p0lib\apache-ant-1.8.4\bin;%PATH%

echo adding nodejs to path
set PATH=%~d0%~p0lib\node;%PATH%

echo ready
cls
