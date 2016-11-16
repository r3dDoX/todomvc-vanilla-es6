# Cake build for Vanilla ES6 (ES2015) • [TodoMVC](http://todomvc.com)

A plain [Vanilla JS](http://todomvc.com/examples/vanillajs/) implementation of a Todo-App.

This example application is used to compare various different build tools, here it is built with **Cake**.

## Tools
[Cake](http://www.cakebuild.net/)

## Approach
Shows how Cake can be used as a Wrapper around NPM scripts.

## Prerequisites:
* [Windows] .NET Core or full .NET framework
* [Linux, OSX] Mono (see below)
* Node and NPM

## Relevant files
* build.ps1/build.sh (cake boostrapping scripts for win, linux, osx)
* build.cake (the actual build file, called from the build.ps1/build.sh script)

## Usage examples

Run `build.ps1` in Powershell or `build.sh` in a Shell to execute the **Default** task defined in `build.cake`
Run `build.ps1 -target Hello` or `build.sh --target Hello` executes the **Hello** task defined in `build.cake`

[Win] Run: `.\tools\Cake\Cake.exe build.cake -target="Hello"` to run the **Hello** task
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

## The Linux experience
Try this at home:

1. Setup a fresh Ubuntu VM in your favourite cloud provider
1. Install .NET core as [described](https://www.microsoft.com/net/core#linuxubuntu)
1. Install .NET core `sudo apt-get install dotnet-dev-1.0.0-preview2.1-003177`
3. Clone repo `git clone -b cake https://github.com/r3dDoX/todomvc-vanilla-es6.git`
4. `cd todomvc-vanilla-es6`
5. Change permissions `chmod u+x build.sh`
6. Run build script `./build.sh` --> oops, `mono` seems to be required (and I thought .NET Core is sufficient)
7. Install mono as [described](http://www.mono-project.com/docs/getting-started/install/linux/)
11. Install mono `sudo apt-get install mono-complete` 
12. Try again `./build.sh` --> oops, `npm` is not installed
15. Install node `sudo apt install npm`
14. Try again `./build.sh` --> oops, `node` is not installed
13. Install node `sudo apt install nodejs-legacy`
16. Try again `./build.sh` --> hooray!