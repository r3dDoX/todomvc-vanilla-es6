# Gradle build for Vanilla ES6 (ES2015) • [TodoMVC](http://todomvc.com)

A plain [Vanilla JS](http://todomvc.com/examples/vanillajs/) implementation of a Todo-App.

This example application is used to compare various different build tools, here it is built with **Gradle**.

## Tools
Gradle

## Approach
Shows how Gradle can be used entirely with existing Gradle plugins. No knowledge of Node modules needed.

## Prerequisites:
* Java Runtime Environment

## Relevant files
* build.gradle (the build script)
* gradle (gradle wrapper to be able to start Gradle without installation)
* gradle.bat (gradle wrapper)

## Usage examples

Run: `gradlew together` (builds all together)
Output (2nd run): 
```
:copyHtml UP-TO-DATE
:lesscss UP-TO-DATE
:combineCss UP-TO-DATE
:minifyCss UP-TO-DATE
:clientInstall SKIPPED
:minifyJs UP-TO-DATE
:together
```

Run: `gradlew minifyJs` to build JavaScript stuff

Run: `gradlew together --continuous` for a watch task for building all together