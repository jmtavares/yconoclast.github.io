---
layout: post
title: Npm Async module - the last coke on the desert
category: web
tags: [npm, web]
---

This **awesome module** has saved me twice in the last days. Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript. Although originally designed for use with Node.js and installable via npm install async, it can also be used directly in the browser.

For more Information
<a target="_blank" href="https://github.com/caolan/async/">
    <i class="fa fa-github"></i>
    Async Github
</a>.

**Quick Example**

{% highlight js %}
var fs = require('fs');
var async = require('async');
var data = {};

// Iterate through all json files
//fs.readdir is asynchronous
fs.readdir('/jsonFiles', function (err, listFiles) {
    async.each(listFiles,
        function iterator(file, callback) {
            var filename = file.split('.')[0];
            data[namespace] = require(filename);

            /*
             * if you have completed your job
             * just invoke the callback to set it completed
             */

            callback(null);
        },
        function (error) {
            /*
             * Here we know all files have been read
             * we can start using the data object
             */

             if (data.twitter && data.twitter.enabled) { ... }
             if (data.facebook && data.facebook.enabled) { ... }
             if (data.github && data.github.enabled) { ... }
        }
});


{% endhighlight %}
