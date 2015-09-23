---
layout: post
title: Fullscreen API
category: web
tags: [web, html5, javascript, es6]
---

## Live Example

<p style="text-align:center"><button class="button default blue" style="width: 300px" onclick="fullscreen(document.documentElement, true)">Fullscreen</button></p>
<p style="text-align:center"><button class="button default blue" style="width: 300px" onclick="fullscreen(document.documentElement, false)">Stop Fullscreen</button></p>
<p style="text-align:center"><button class="button default blue" style="width: 300px" onclick="fullscreen(document.querySelector('#gist26600423'), true)">Fullscreen Gist</button></p>

## Code

{% gist yconoclast/86580f84a93ebf182a67 %}

<script>
    function fullscreen(elem, active) {
        if (active) {
            var fullscreenFunction  = elem.requestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
            fullscreenFunction.call(elem);
        } else {
            var fullscreenExitFunction  = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
            fullscreenExitFunction.call(document);
        }
    }
</script>

<!--more-->

<h2>
    Can I use
    <i class="fa fa-chrome partial-support" aria-hidden="true" title="Chrome - Partial Support"></i>
    <i class="fa fa-opera partial-support" aria-hidden="true" title="Opera - Partial Support"></i>
    <i class="fa fa-firefox partial-support" aria-hidden="true" title="Firefox - Partial Support"></i>
    <i class="fa fa-safari partial-support" aria-hidden="true" title="Safari - Partial Support"></i>
    <i class="fa fa-internet-explorer supported" aria-hidden="true" title="Internet Explorer - Supported"></i>
</h2>
<p class="hide-small">
    <a href="http://caniuse.com/#feat=fullscreen" target="_blank">
        <img src="{{ site.baseurl }}/images/posts/fullscreen-api-caniuse.png" alt="Can I use"/>
    </a>
</p>


