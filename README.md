# Gradle build for Vanilla ES6 (ES2015) • [TodoMVC](http://todomvc.com)

A plain [Vanilla JS](http://todomvc.com/examples/vanillajs/) implementation of a Todo-App.

This example application is used to compare various different build tools, here it is built with **Gradle**.

## Tools
Gradle

## Approach
Shows how Gradle can be used as a Wrapper around NPM scripts.

## Prerequisites:
* Java Runtime Environment

## Relevant files
* build.gradle (the build script)
* rollup.config (configuration for rollup used in bundleJs task)
* .babelrc (configuration for babel used from rollup in bundleJs task)
* gradle (gradle wrapper to be able to start Gradle without installation)
* gradle.bat (gradle wrapper)

## Usage examples

Run: `gradlew`
Output (2nd run): 
```
:nodeSetup UP-TO-DATE
:npmSetup UP-TO-DATE
:npmInstall UP-TO-DATE
:buildCss UP-TO-DATE
:bundleJs UP-TO-DATE
:uglifyJs UP-TO-DATE
:buildJs
:build
```

Run: `gradlew buildJs` to build JavaScript stuff

Run: `gradlew build --continuous` for a watch task for building all