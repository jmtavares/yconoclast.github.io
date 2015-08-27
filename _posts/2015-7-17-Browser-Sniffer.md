---
layout: post
title: Browser Sniffer
category: web
tags: [javascript, web]
---

Browser Sniffer aggregates information about the browser (browser name, operating system, screen capabilities, performance measures).
It uses  <a href="https://github.com/ded/bowser" target="_blank">Bowser</a> to detect the browser. You can check in the Bowser Repository the full list of devices supported <a href="https://github.com/ded/bowser/blob/master/src/useragents.js" target="_blank">(UserAgents)</a>.


For more Information
<a target="_blank" href="https://github.com/yconoclast/browsersniffer">
    <i class="fa fa-github"></i>
    Browser Sniffer Github
</a>.

{% highlight js %}
npm install browsersniffer --save-dev
{% endhighlight %}

Include the minified version (browsersniffer.min.js) in your page and call this method:

{% highlight js %}
window.browsersniffer.detect();
{% endhighlight %}

And it will return an object like this:

{% highlight js %}
{
  "browser": "Chrome",
  "version": "42.0",
  "mobileOS": "Android",
  "mobileOSVersion": "4.4.4",
  "bowser": {
    "name": "Chrome",
    "chrome": true,
    "version": "42.0",
    "webkit": true,
    "android": true,
    "osversion": "4.4.4",
    "mobile": true,
    "a": true
  },
  "language": "en-US",
  "javaEnabled": true,
  "onLine": true,
  "screen": {
    "currentResolution": "384x640",
    "colorDepth": 24,
    "maxTouchPoints": 1,
    "orientation": "landscape"
  },
  "timing": {
    "unloadEventStart": 4,
    "unloadEventEnd": 4,
    "redirectStart": 0,
    "redirectEnd": 0,
    "fetchStart": 0,
    "domainLookupStart": 1,
    "domainLookupEnd": 1,
    "connectStart": 1,
    "connectEnd": 1,
    "secureConnectionStart": 0,
    "requestStart": 1,
    "responseStart": 3,
    "responseEnd": 4,
    "domLoading": 9,
    "domInteractive": 688,
    "domContentLoadedEventStart": 688,
    "domContentLoadedEventEnd": 705,
    "domComplete": 1239,
    "loadEventStart": 1239,
    "loadEventEnd": 1239
  }
}
{% endhighlight %}

