---
layout: post
title: How to sort Object Properties
category: javascript
---

I feel really sad when some API returns me an associative array and I need to sort it by its key. So how can we do this?

Imagine you have this object:

{% highlight js %}
{
  "2015-07-20T16:55:00": {
    "line": "D",
    "driver": "Sammie Egbert",
    "metroId": "4"
  },
  "2014-10-19T17:51:00": {
    "line": "A",
    "driver": "Gaz Barnaby",
    "metroId": "2"
  },
  "2015-06-23T16:55:00": {
    "line": "C",
    "driver": "Wilburn Courtney",
    "metroId": "1"
  },
  "2013-05-03T19:12:00": {
    "line": "B",
    "driver": "Cecil Royale",
    "metroId": "3"
  },
  "2014-12-08T20:50:00": {
    "line": "A",
    "driver": "Pierce Jamey",
    "metroId": "5"
  }
}
{% endhighlight %}

And we want to sort descending by its key, in this case it's a Date.

{% gist yconoclast/7a8f204ebe5a3f4b5d1e %}

After using this function we get this object:

{% highlight js %}
{
  "2013-05-03T19:12:00": {
    "line": "B",
    "driver": "Cecil Royale",
    "metroId": "3"
  },
  "2014-10-19T17:51:00": {
    "line": "A",
    "driver": "Gaz Barnaby",
    "metroId": "2"
  },
  "2014-12-08T20:50:00": {
    "line": "A",
    "driver": "Pierce Jamey",
    "metroId": "5"
  },
  "2015-06-23T16:55:00": {
    "line": "C",
    "driver": "Wilburn Courtney",
    "metroId": "1"
  },
  "2015-07-20T16:55:00": {
    "line": "D",
    "driver": "Sammie Egbert",
    "metroId": "4"
  }
}
{% endhighlight %}

**Do you know a better way? Please share with me.**
