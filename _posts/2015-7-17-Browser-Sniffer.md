---
layout: post
title: Browser Sniffer
category: web
---

Browser Sniffer aggregates information about the browser (browser name, operating system, screen capabilities, performance measures).
It uses  <a href="https://github.com/ded/bowser" target="_blank">Bowser</a> to detect the browser. You can check in the Bowser Repository the full list of devices supported <a href="https://github.com/ded/bowser/blob/master/src/useragents.js" target="_blank">(UserAgents)</a>.


For more Information
<a class="fa fa-github" target="_blank" href="https://github.com/yconoclast/browsersniffer">Browser Sniffer Github</a>.

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
  "mobileOS": "Android",
  "mobileOSVersion": "4.4.4",
  "version": "42.0",
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
  "maxTouchPoints": 1,
  "javaEnabled": true,
  "onLine": true,
  "currentResolution": "384x640",
  "colorDepth": 24,
  "timing": {
    "unloadEventStart": 213,
    "unloadEventEnd": 213,
    "redirectStart": 0,
    "redirectEnd": 0,
    "fetchStart": 0,
    "domainLookupStart": 0,
    "domainLookupEnd": 0,
    "connectStart": 0,
    "connectEnd": 0,
    "secureConnectionStart": 0,
    "requestStart": 209,
    "responseStart": 212,
    "responseEnd": 213,
    "domLoading": 217,
    "domInteractive": 688,
    "domContentLoadedEventStart": 688,
    "domContentLoadedEventEnd": 704,
    "domComplete": 1907,
    "loadEventStart": 1908,
    "loadEventEnd": 1908
  }
{% endhighlight %}

