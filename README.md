# EnrollMate

> Team JID 8121's capstone project for Dr. Emanuel Waddell

## Brief Vue Explanation
[Vue's Documentation](https://vuejs.org/v2/guide/)
### Components
Vue is component based, meaning each part of the UI can be found in the `src/components/` folder. These are files that end in `.vue` Right now, there's an App (the main "root" component), Home, About, Nav and a HelloWorld component (from initializing the project).

Check out [here](https://vuejs.org/v2/guide/components.html) to learn more about components.
### Syntax
The syntax for the components is fairly straight forward and is split up into `<template></template>`, `<script></script>`, `<style></style>` tags where the code corresponds respectively to the HTML, Javascript, and CSS for that component.

## Build Setup
To get everything set up, make sure that you have [Node](https://nodejs.org/en/) installed.

Below are commands that were included when I initialized the Vue app:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

However, once you clone the repo, all you'll need to do to get it to show up on your local host is to go to the folder in your command line, and execute `npm install` then `npm run dev`, and what I have so far should be on `http://localhost:8080` in your browser.