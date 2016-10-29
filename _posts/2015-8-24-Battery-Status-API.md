---
layout: post
title: Battery Status API
summary: The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.
category: web
tags: [web, battery-api]
---

The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.

<!--more-->

## Code Example

{% highlight js %}
navigator.getBattery().then(function(battery) {

  console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  console.log("Battery level: " + battery.level * 100 + "%");
  console.log("Battery charging time: " + battery.chargingTime + " seconds");
  console.log("Battery discharging time: " + battery.dischargingTime + " seconds");

  battery.addEventListener('chargingchange', function() {
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  });

  battery.addEventListener('levelchange', function() {
    console.log("Battery level: " + battery.level * 100 + "%");
  });

  battery.addEventListener('chargingtimechange', function() {
    console.log("Battery charging time: " + battery.chargingTime + " seconds");
  });

  battery.addEventListener('dischargingtimechange', function() {
    console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
  });

});
{% endhighlight %}

<script>
    if (navigator.getBattery) {
        document.write('<h2>Live Example <i id="battery-status" class="fa fa-battery-full" aria-hidden="true"></i></h2>');
    }
</script>

<span id="live-example"></span>

<script>
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            var container = document.getElementById('live-example');

            var p1 = document.createElement('p');
            var b1 = document.createTextNode("Battery charging? " + (battery.charging ? "Yes" : "No"));
            p1.appendChild(b1);

            var p2 = document.createElement('p');
            var b2 = document.createTextNode("Battery level: " + battery.level * 100 + "%");
            p2.appendChild(b2);

            var p3 = document.createElement('p');
            var b3 = document.createTextNode("Battery charging time: " + battery.chargingTime + " seconds");
            p3.appendChild(b3);

            var p4 = document.createElement('p');
            var b4 = document.createTextNode("Battery discharging time: " + battery.dischargingTime + " seconds");
            p4.appendChild(b4);

            container.appendChild(p1);
            container.appendChild(p2);
            container.appendChild(p3);
            container.appendChild(p4);

            var batteryLevel = battery.level * 100;
            var batteryLevelElement = document.getElementById('battery-status');
            batteryLevelElement.setAttribute('title', batteryLevel + '%');
            switch (true) {
                case (batteryLevel >=0 && batteryLevel < 25):
                    batteryLevelElement.className = "fa fa-battery-empty";
                    break;
                case (batteryLevel >= 25 && batteryLevel < 50):
                    batteryLevelElement.className = "fa fa-battery-quarter";
                    break;
                case (batteryLevel >= 50 && batteryLevel < 75):
                    batteryLevelElement.className = "fa fa-battery-half";
                    break;
                case (batteryLevel >= 75 && batteryLevel < 100):
                    batteryLevelElement.className = "fa fa-battery-three-quarters";
                    break;
                default:
                    batteryLevelElement.className = "fa fa-battery-full";
                    break;
            }
        });

    }
</script>

<h2>
Can I use
<i class="fa fa-chrome supported" aria-hidden="true" title="Chrome - Supported"></i>
<i class="fa fa-opera supported" aria-hidden="true" title="Opera - Supported"></i>
<i class="fa fa-firefox supported" aria-hidden="true" title="Firefox -  Supported"></i>
<i class="fa fa-safari not-supported" aria-hidden="true" title="Safari - Not Supported"></i>
<i class="fa fa-edge not-supported" aria-hidden="true" title="Edge - Not Supported"></i>
<i class="fa fa-internet-explorer not-supported" aria-hidden="true" title="Internet Explorer - Not Supported"></i>
</h2>
<p class="hide-small">
<a href="http://caniuse.com/#feat=battery-status" target="_blank">
    <img src="{{ site.baseurl }}/images/posts/battery-status-caniuse.png" alt="Can I use"/>
</a>
</p>


## Info
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API" target="_blank" title="Battery Status API - Web API Interfaces | MDN">See all information here.</a>
