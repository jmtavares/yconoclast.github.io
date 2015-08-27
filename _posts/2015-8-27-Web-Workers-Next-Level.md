---
layout: post
title: Web Workers Next Level
category: web
tags: [web, html5, web-worker, javascript]
---

Now that we understand what we can do with **Web Workers** and what are the benefits, I thought I could create a small example on how to use this in a real scenario.

We are building a webpage just to list my friends. All the hard work is done within the Web Worker, on our page we will have a small script just to put my friends on the page.

Since native <a href="http://caniuse.com/#search=promises" target="_blank">**Promises**</a> work on almost every browser I have use them :)

Sorry if you are using some **Internet Explorer it won't work**.

All relevant files are here:

<a target="_blank" href="https://github.com/yconoclast/yconoclast.github.io/tree/master/demos/web-workers-next-level/">
    <i class="fa fa-github"></i>
    Source files
</a>

<!--more-->

<h2>Demo - My Friends</h2>

<ul id="friends-list"></ul>

On this page I only have this script:

1. Request the list of friends
2. Handle the response from the Web Worker

{% highlight js %}
    if (window.Worker) {
        var requestWorker = new Worker("/demos/web-workers-next-level/worker.js");

        requestWorker.onmessage = function(e) {
            switch (e.data.action) {
                case 'getFriends':
                    // Handle response and list my friends
                    e.data.results.forEach(function (element, index, array) {

                        var genderIcon = "<i class='fa fa-" + element.gender +"'></i>"
                        $("#friends-list").append("<p>" + genderIcon + element.name + " - " + element.email + "</p>");
                    });


                    break;
            }
        };

        // Request my friends list to the Web Worker
        requestWorker.postMessage({
            action: 'getFriends'
        });
    }
{% endhighlight %}

Now the worker.js

This file is just a proxy to another services.

<a target="_blank" href="https://github.com/yconoclast/yconoclast.github.io/tree/master/demos/web-workers-next-level/worker.js">
    <i class="fa fa-github"></i>
    worker.js source
</a>
{% highlight js %}
"use strict";

//Import this scripts into the worker namespace, it won't to added to the window object
importScripts('http.js', 'friends.service.js');

var friendsService = new FriendsService();

onmessage = function (e) {
    switch (e.data.action) {
        case 'getFriends':
            friendsService.requestListFriends().
                then(function (data) {
                    postMessage({
                        action: 'getFriends',
                        status: 'success',
                        results: data
                    });
                }).
                catch(function (error) {
                    postMessage({
                        action: 'getFriends',
                        status: 'error',
                        results: error
                    });
                });
            break;
    }
};

{% endhighlight %}

I've stolen an HTTP service <a target="_blank" href="https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Promise">(link)</a> to handle all requests, if you want take a look here:

<a target="_blank" href="https://github.com/yconoclast/yconoclast.github.io/tree/master/demos/web-workers-next-level/http.js">
    <i class="fa fa-github"></i>
    http.js source
</a>

Now **Friends Service** is responsible to collect, aggregate and structure the information to be sent.

<a target="_blank" href="https://github.com/yconoclast/yconoclast.github.io/tree/master/demos/web-workers-next-level/friends.service.js">
    <i class="fa fa-github"></i>
    friends.service.js source
</a>


{% highlight js %}
'use strict';

function FriendsService() {
    this.requestListFriends = function () {
        return new Promise(function (resolve, reject) {
            //Use HTTP service
            http('/demos/web-workers-next-level/friendsList.json')
                .get()
                .then(function (data) {
                    //Do all logic here
                    resolve(JSON.parse(data));
                    return data;
                })
                .catch(function (error) {
                    //Do all logic here
                    reject(error);
                });
        });
    };
}

{% endhighlight %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>

    if (window.Worker) {
        var requestWorker = new Worker("/demos/web-workers-next-level/worker.js");

        requestWorker.onmessage = function(e) {
            switch (e.data.action) {
                case 'getFriends':
                    // Handle response and list my friends
                    e.data.results.forEach(function (element, index, array) {
                        var genderIcon = "<i class='fa fa-" + element.gender +"'></i>"
                        $("#friends-list").append("<p>" + genderIcon + element.name + " - " + element.email + "</p>");
                    });


                    break;
            }
        };

        // Request my friends list to the Web Worker
        requestWorker.postMessage({
            action: 'getFriends'
        });
    }
</script>
