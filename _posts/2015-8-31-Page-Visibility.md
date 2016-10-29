---
layout: post
title: Page Visibility API
category: web
tags: [web, html5, javascript]
---

**Page Visibility Definition** - This specification defines a means for site developers to programmatically determine the current visibility state of the page in order to develop power and CPU efficient web applications.

The Page Visibility specification defines a means for site developers to programmatically determine the current visibility of a document and be notified of visibility changes.
Without knowing the visibility state of a page, web developers have been designing webpages as if they are always visible.
This not only results in higher machine resource utilization, but it prevents web developers from making runtime decisions based on whether the webpage is visible to the user.
Designing web pages with knowledge of the page visibility will allow for improved user experiences and power efficient sites.

<!--more-->

## Gist

{% gist yconoclast/217719106ba6c18f19fa %}

## Live Example
**Please change the selected tab**


<div id="logContainer" style="max-height:300px;overflow:auto"></div>

<script>

    if ("hidden" in document && "visibilityState" in document) {
        document.addEventListener("visibilitychange", onVisibilityChange);
        onVisibilityChange();
    } else {
        logContainer.innerHTML = "This browser doesn't support Page Visibility API";
    }

    function onVisibilityChange() {
        var className = document.hidden ? "not-supported" : "supported";
        var text = document.hidden ? "hidden" : "visible";

        logContainer.innerHTML = "<span class='" + className + "'>The page is <b>" + text + "</b>.</br>" + logContainer.innerHTML;
    }
</script>

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
    <a href="http://caniuse.com/#feat=pagevisibility" target="_blank">
        <img src="{{ site.baseurl }}/images/posts/page-visibility-caniuse.png" alt="Can I use"/>
    </a>
</p>

