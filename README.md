# Nuxt Yeoman Generator
This is a NuxtJS Yeoman Generator. It helps to quickly scaffold some of the [NuxtJS](https://nuxtjs.org/) elements.

Available generators:
- pages

# Requirements
- [Yeoman](https://yeoman.io/)

# Getting started
## Install Yeoman
```
npm install -g yo
```
## Link generator-nuxt npm module
Since this generator is not yet available as a global npm module you have to symlink it as a local one.
From the root of the generatr folder type:
```
npm link
```
or if you're using Yarn
```
yarn link
```
and in your project folder type:
```
yarn link "generator-nuxt"
```
# Use the generator
## Pages Generator
This commands help you scaffold Nuxt pages
```bash
$ yo nuxt:pages
```
```bash
? Insert page path relative to the project including children pages
```
Now insert the structure of the pages to create (see examples below)
1. nested pages
```bash
? Insert page path relative to the project including children pages /parent/child
```
2. single page folder
```bash
? Insert page path relative to the project including children pages /mypage
```
3. single page file
```bash
? Insert page path relative to the project including children pages mypage.vue
```
Now insert the folder name inside /pages where to save the pages
```bash
? Target path where the pages will be written myfolder
```
