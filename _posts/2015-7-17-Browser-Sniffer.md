---
layout: post
title: Browser Sniffer
category: web
---


Browser Sniffer uses <a href="https://github.com/ded/bowser" target="_blank">Bowser</a> to detect the **browser name, browser version and mobile operating system**.
You can check in the Bowser Repository the full list of devices supported <a href="https://github.com/ded/bowser/blob/master/src/useragents.js" target="_blank">(UserAgents)</a>.

For more Information
<a class="fa fa-github" target="_blank" href="https://github.com/yconoclast/browsersniffer">Browser Sniffer Github</a>.


Include the minified version (browsersniffer.min.js) in your page and call this method:

{% highlight js %}
window.browsersniffer.detect();
{% endhighlight %}

And it will return an object like this:

{% highlight js %}
{
  "browser": "Android Native",
  "mobileOperatingSystem": "Android",
  "version": "4.0",
  "bowser": {
    "name": "Android",
    "version": "4.0",
    "webkit": true,
    "android": true,
    "osversion": "4.0",
    "mobile": true,
    "x": true
  }
}
{% endhighlight %}

