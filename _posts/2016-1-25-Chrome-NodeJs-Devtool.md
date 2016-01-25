---
layout: post
title: Run Node.js inside Chrome DevTools
category: web
tags: [web, javascript, nodejs]
---

Runs Node.js programs inside Chrome DevTools (using [Electron](https://github.com/atom/electron/))

~~~ js
# open a Node program in Chrome's DevTools
devtool src/index.js
~~~
This allows you to profile, debug and develop typical Node.js programs with some of the features of Chrome DevTools.

The recording below shows setting breakpoints within an HTTP server.

<img src="https://camo.githubusercontent.com/50a1b83c05a2995479bb27d913e12b6f25557f2c/687474703a2f2f692e696d6775722e636f6d2f56345251535a322e676966" alt="Scratch JS"/>

<!--more-->

### Install

~~~ js
npm install devtool -g
~~~

For more Information
<a target="_blank" href="https://github.com/Jam3/devtool">
    <i class="fa fa-github"></i>
    Devtool Github
</a>.
