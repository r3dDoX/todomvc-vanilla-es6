# Cake build for Vanilla ES6 (ES2015) • [TodoMVC](http://todomvc.com)

A plain [Vanilla JS](http://todomvc.com/examples/vanillajs/) implementation of a Todo-App.

This example application is used to compare various different build tools, here it is built with **Cake**.

## Tools
[Cake](http://www.cakebuild.net/)

## Approach
Shows how Cake can be used as a Wrapper around NPM scripts.

## Prerequisites:
* nothing has to be installed(??)

## Relevant files
* build.ps1/build.sh (cake boostrapping scripts for win, linux, osx)
* build.cake (the build file)

## Usage examples

Run `build.ps1` in Powershell or `build.sh` in a Shell to execute the **Default** task defined in `build.cake`
Run `build.ps1 -target Hello` or `build.sh --target Hello` executes the **Hello** task defined in `build.cake`

[Win] Run: `.\tools\Cake\Cake.exe build.cake -target="Hello"` to run the **Clean** task
Output:
```
========================================
Hello
========================================
Executing task: Hello

> @ hello C:\Projects\smackdown\npm-script
> echo "hello fromm npm script"

"hello fromm npm script"
Finished executing task: Hello

Task                          Duration
--------------------------------------------------
Hello                         00:00:01.2968708
--------------------------------------------------
Total:                        00:00:01.2968708
```

## Notes
* For Visual Studio Code, there is a [cake extension](https://marketplace.visualstudio.com/items?itemName=cake-build.cake-vscode) available which provides syntax highlighting.
* There are also [Cake addins](http://www.cakebuild.net/addins/category/node) available to wrap Webpack, Gulp and Yarn tasks