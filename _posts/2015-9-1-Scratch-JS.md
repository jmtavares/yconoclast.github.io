---
layout: post
title: Scratch JS - Execute ES6 code on Chrome
category: web
tags: [web, html5, javascript, es6]
---

### What is it?
It's a **Chrome DevTools extension** ([available here](https://chrome.google.com/webstore/detail/scratch-js/alploljligeomonipppgaahpkenfnfkn)) that allows you to execute ES6/ESNext/ES2015 code in the context of the page you're viewing, as though it were the standard DevTools console.

### How do I use it?
Once you familiarize yourself with some of the concepts and features of ES6, [install](https://chrome.google.com/webstore/detail/scratch-js/alploljligeomonipppgaahpkenfnfkn) the extension. You'll then notice the `Scratch JS` tab inside DevTools (⌘-⌥-i on a Mac, ctrl-⇧-i on a PC). You can toggle console visibility with `esc`, and code can be executed either by clicking the _Run it_ button, or using ⌘-↩ on a Mac, ctrl-↩ on a PC.

<!--more-->

### How does it work?
It uses one of two engines to transpile ES6 to good-old-fashioned ES5: Google's [Traceur](https://github.com/google/traceur-compiler) and [babel](https://github.com/babel/babel/). Select which one you want to use from the Settings panel. If there's a feature you want to use that isn't working, check the [compatibility table](http://kangax.github.io/compat-table/es6/) under those 2 columns to see if it's been implemented yet.

### But why?
Both [Traceur](https://google.github.io/traceur-compiler/demo/repl.html#) and [babel](https://babeljs.io/) already have their own REPLs. Why make a Chrome extension? For me it was just the convenience of being able to read a blog about a new feature or syntax and try it right there while I'm reading the article. Pop open the DevTools on the side of the page and give'r.

<img src="{{ site.baseurl }}/images/posts/scratch-js.png" alt="Scratch JS"/>


For more Information
<a target="_blank" href="https://github.com/richgilbank/Scratch-JS">
    <i class="fa fa-github"></i>
    Scratch JS Github
</a>.
