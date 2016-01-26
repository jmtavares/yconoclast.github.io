---
layout: post
title: Geographical location
category: web
tags: [web, javascript, html5]
---

## Geolocation Code

{% highlight js %}
var mapElement = document.getElementById("mapholder");

function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        var mapElement = document.getElementById("mapholder");
        mapElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=";
    img_url += latlon +"&zoom=14&size=400x300&sensor=false";

    mapElement.innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mapElement.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            mapElement.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mapElement.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            mapElement.innerHTML = "An unknown error occurred."
            break;
    }
}
{% endhighlight %}

## Live Example

<p style="text-align:center">
    <button class="test-btn button default blue" onclick="getPosition()">Get current Position</button>
</p>

<div id="mapholder" style="text-align:center"></div>


<script>
    var mapElement = document.getElementById("mapholder");

    function getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            mapElement.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=800x400&sensor=false";
        mapElement.innerHTML = "<img src='"+img_url+"'>";
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                mapElement.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                mapElement.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                mapElement.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                mapElement.innerHTML = "An unknown error occurred."
                break;
        }
    }
</script>

<!--more-->

<h2>
Can I use
<i class="fa fa-chrome supported" aria-hidden="true" title="Chrome - Supported"></i>
<i class="fa fa-opera supported" aria-hidden="true" title="Opera - Supported"></i>
<i class="fa fa-firefox supported" aria-hidden="true" title="Firefox - Supported"></i>
<i class="fa fa-safari supported" aria-hidden="true" title="Safari - Supported"></i>
<i class="fa fa-internet-explorer supported" aria-hidden="true" title="Internet Explorer - Supported"></i>
</h2>
<p class="hide-small">
<a href="http://caniuse.com/#feat=geolocation" target="_blank">
    <img src="{{ site.baseurl }}/images/posts/geolocation-caniuse.png" alt="Can I use"/>
</a>
</p>



