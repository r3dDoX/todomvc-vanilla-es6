# Gradle build for Vanilla ES6 (ES2015) • [TodoMVC](http://todomvc.com)

A port of the [Vanilla JS Example](http://todomvc.com/examples/vanillajs/).
Shows how Gradle can be used as a Wrapper around NPM scripts.

## Prerequisites:
* Java Runtime Environment

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