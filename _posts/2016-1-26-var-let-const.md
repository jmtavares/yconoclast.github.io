---
layout: post
title: Var, let and const
category: web
tags: [web, javascript, es6]
---


Besides **var**, we now have access to two new identifiers for storing values —**let** and **const**.

Unlike var, let and const statements **are not hoisted** to the top of their enclosing scope.

<p data-height="287" data-theme-id="dark" data-slug-hash="OMvBxO" data-default-tab="js,result" data-user="yconoclast" data-embed-version="2" data-pen-title="Var, let and const" class="codepen">See the Pen <a href="http://codepen.io/yconoclast/pen/OMvBxO/">Var, let and const</a> by José (<a href="http://codepen.io/yconoclast">@yconoclast</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


However, observe what happens when we replace var using let:

<p data-height="304" data-theme-id="dark" data-slug-hash="pgLxXm" data-default-tab="js,result" data-user="yconoclast" data-embed-version="2" data-pen-title="pgLxXm" class="codepen">See the Pen <a href="http://codepen.io/yconoclast/pen/pgLxXm/">pgLxXm</a> by José (<a href="http://codepen.io/yconoclast">@yconoclast</a>) on <a href="http://codepen.io">CodePen</a>.</p>

<!--more-->

This change in behavior highlights that we need to be careful when refactoring legacy code which uses var. Blindly replacing instances of var with let may lead to unexpected behavior.

> **Note:** let and const are block scoped. Therefore, referencing block-scoped identifiers before they are defined will produce a ReferenceError.

{% highlight js %}
console.log(x);

let x = 'hi'; // ReferenceError: x is not defined
{% endhighlight %}

> **Best Practice:** Leave var declarations inside of legacy code to denote that it needs to be carefully refactored. When working on a new codebase, use let for variables that will change their value over time, and const for variables which cannot be reassigned.


Credits to **[David Leonard](https://github.com/DrkSephy/es6-cheatsheet).**

