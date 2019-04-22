# Getting started with Ember

> My notes from Pluralsight [course](https://app.pluralsight.com/library/courses/ember-2-getting-started/table-of-contents)

Course is using 2.8.0

## What is Ember

### Ember Core Concepts

- URL centric: URL leads ember state, it comes first, even when transitioning within app
- URL reaches router, which passes request to route handler
- Route handler renders templates and components, and displays resulting page in browser
- Route handler can redirect request to a different route (eg: in the case of faileld authentication)
- Route handler usually loads model, then renders template and displays page
- URL represents state of application, someone should be able to bookmark the page and come back to it exactly as currently shown

![core concepts](doc-images/core-concepts.png "core concepts")

### Ember Definitions

***Router*** Maps URL to Route Handler

***Route Handler*** Loads the model and renders the template

***Model*** Represents persistent state (state could reside anywhere such as db, localstorage, etc)

***Templates*** Organize and describe how the interface looks. Should *NOT* contain logic, this will mostly be enforced by Handlebars

***Components*** Control how the interface behaves, using Actions and Events (discussed later)

## Getting Started

### Setup Your Environment

Install Ember-CLI and a few other deps. Course using 2.8.0, but will try latest as of 2019-04-22

```shell
$ npm install -g ember-cli@3.9.0
# Shouldn't need this with Ember 3?
$ npm install -g bower
$ brew install watchman
```

### Ember CLI

- Asset Pipeline for pre-processing, transpiling, and preparing for deployment
- Provides conventional directory structure
- Add-on system for plugins

**Common Commands**

- `ember new <app-name>` Create a new app including dir structure and load deps
- `ember init` Generate app structure in existing dir, used to upgrade existing app to newer ember version
- `ember server` Run dev server, live reload
- `ember generate <name> <opts>` Run code generator to generate some boilerplate code, usually also creates a corresponding test
- `ember install <addon>` Install an add-on + all its deps
- `ember build` Compiles/Builds app for distribution and places in `dist` dir
- `ember test` Run the test suite with `Testem`, can run via CLI or browser

### Demo: Create a New App

Quick overview for now, will go into more detail on each part later.

```shell
$ ember new loopylog
```