---
layout: post
title: Web Workers should we use them?
category: web
tags: [web, html5, web-worker]
---

I have created a script to do **250 requests to get a huge JSON** and every time I get a response I do an EVAL to it.
This is needed in order to compare the results between using a **Web Worker** to do all the processing or using the main thread.

<!--more-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>
    var success = 0;
    var startTime;
    var elapsedTime;
    var testRunning = false;
    var numberOfRequests;

    if (window.Worker) {
        var requestWorker = new Worker("/demos/web-workers/worker.js");
        var success = 0;
        requestWorker.onmessage = function(e) {
            tickProgress('webworker');
        };
    }
</script>

<label>Number of Requests:</label>
<label id="range-value"></label>

<div style="text-align:center">
    <input id="range" type="range" min="50" max="1000" value="250" onchange="updateRange()" style="width:50%"></input>
</div>

<label>Doing all processing without using web worker</label>
<label id="local-time"></label>

<button class="test-btn" onclick="localRequest()">Main Thread Requests</button>

<label>Doing all processing using web worker</label>
<label id="webworker-time"></label>

<button class="test-btn" onclick="webworkerRequest()">Web Worker Requests</button>



<div style="text-align:center">
    <label style="display:block">Progress</label>
    <progress id="progress" value="0" max="250" style="width:50%"></progress>
</div>

<div style="min-height: 300px">
    <div id="box1" style="background:#00AAF7;height:10px;width:10px;"></div>
    <div id="box2" style="background:#333;height:10px;width:10px;"></div>
</div>




### Conclusions

If you have ran the two tests you will realize that using a **Web Worker** is much faster and it won't affect the animation, using the main thread the animation will have problems and it will get stuck sometimes.

You will get similar times running with or without a **Web Worker**.

**Web Workers are supported in all browsers.**


<h2>
Can I use
<i class="fa fa-chrome supported" aria-hidden="true" title="Chrome - Supported"></i>
<i class="fa fa-opera supported" aria-hidden="true" title="Opera - Supported"></i>
<i class="fa fa-firefox supported" aria-hidden="true" title="Firefox - Supported"></i>
<i class="fa fa-safari supported" aria-hidden="true" title="Safari - Supported"></i>
<i class="fa fa-internet-explorer supported" aria-hidden="true" title="Internet Explorer - Supported"></i>
</h2>
<p class="hide-small">
<a href="http://caniuse.com/#feat=webworkers" target="_blank">
    <img src="{{ site.baseurl }}/images/posts/webworker-caniuse.png" alt="Can I use"/>
</a>
</p>

<script>


function updateRange() {
    $("#range-value").text($("#range").val()).css("font-weight", "bold");
    numberOfRequests = $("#range").val();
    $("#progress").attr("max", numberOfRequests);
}

function setTestVariables () {
    $(".test-btn").attr("disabled", true);
    success = 0;
    testRunning = true;
    startTime = new Date();
}
function tickProgress(type) {
    success++;
    $("#progress").val(success);
    if (success == numberOfRequests) {
        elapsedTime = new Date() - startTime;
        testRunning = false;
        $(".test-btn").attr("disabled", false);

        $("#" + type + "-time").text("(" + elapsedTime + "ms)").css("font-weight", "bold");
    }
}

function localRequest() {
    if (!testRunning) {
        setTestVariables();
        for (var i = 0; i < numberOfRequests; i++) {
            makeRequest('/demos/web-workers/data.json?' + Math.random(),
                 function (data) {
                    tickProgress('local');
                });
        }
    }
}

function webworkerRequest() {
    if (!testRunning) {
        setTestVariables();
        for (var i = 0; i < numberOfRequests; i++) {
            requestWorker.postMessage('/demos/web-workers/data.json?' + Math.random());
        }
    }
}


(function startAnimation () {
    updateRange();
    timerAnimation = setInterval(function(){
        var box1 = $("#box1");
        box1.animate({height: '150px', opacity: '0.4'}, "slow");
        box1.animate({width: '100%', opacity: '1'}, "slow");
        box1.animate({height: '10px', opacity: '0.4'}, "slow");
        box1.animate({width: '10px', opacity: '1'}, "slow");

        var box2 = $("#box2");
        box2.animate({height: '150px', opacity: '0.4'}, "slow");
        box2.animate({width: '100%', opacity: '1'}, "slow");
        box2.animate({height: '10px', opacity: '0.4'}, "slow");
        box2.animate({width: '10px', opacity: '1'}, "slow");

    }, 1000);
})();


function makeRequest (url, callback) {
    var xhr;

    if (typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"];

        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            }
            catch (e) {
            }
        } // end for
    }

    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }

        if (xhr.status !== 200) {
            return;
        }

        // all is well
        if (xhr.readyState === 4) {
            // Evil Eval HERE :D
            var evilEval = eval(xhr.response);
            var evilEval2 = eval(xhr.response);
            var evilEval3 = eval(xhr.response);
            var evilEval4 = eval(xhr.response);
            var evilEval5 = eval(xhr.response);
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}

</script>
