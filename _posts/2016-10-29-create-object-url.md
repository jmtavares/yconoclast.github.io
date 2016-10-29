---
layout: post
title: URL.createObjectURL()
category: web
tags: [web, javascript]
---

Probably most of you never heard of this.
This lets you create a temporary URL with the content you want, awesome right?

So here's the summary:

> The URL.createObjectURL() static method creates a DOMString containing an URL representing the object given in parameter.
The URL lifetime is tied to the document in the window on which it was created.
The new object URL represents the specified File object or Blob object.


<!--more-->

## Example

<script>
    function openTest() {
        window.URL = window.URL || window.webkitURL;
        var blob = new Blob([document.getElementById('html').value], {type: 'text/html'});
        window.open(window.URL.createObjectURL(blob));
    }
</script>

<textarea id="html" class="block">
<html>
    <head>
        <title>Example of URL.createObjectURL()</title>
    </head>
    <body>
        <h1 style="text-align:center">Hello</h1>
    </body>
</html>
</textarea>

<p style="text-align:center">
    <button class="test-btn button default blue" onclick="openTest()">Open</button>
</p>

## Code

{% gist yconoclast/6ce9e60b9ec1f7e8b815e2921f83c0ec %}

<h2>
Can I use
<i class="fa fa-chrome supported" aria-hidden="true" title="Chrome - Supported"></i>
<i class="fa fa-opera supported" aria-hidden="true" title="Opera - Supported"></i>
<i class="fa fa-firefox supported" aria-hidden="true" title="Firefox - Supported"></i>
<i class="fa fa-safari supported" aria-hidden="true" title="Safari - Supported"></i>
<i class="fa fa-edge supported" aria-hidden="true" title="Edge - Supported"></i>
<i class="fa fa-internet-explorer supported" aria-hidden="true" title="Internet Explorer - Supported"></i>
</h2>
<p class="hide-small">
    <a href="http://caniuse.com/#feat=bloburls" target="_blank">
        <img src="{{ site.baseurl }}/images/posts/createObjectURL-caniuse.png" alt="Can I use"/>
    </a>
</p>




