---
layout: post
title: How to use  Heroku to host your apps
category: web
tags: [web, javascript, node, Heroku, host]
---

I needed to host a node app somewhere and I didn't want yet to pay for it.

So [Heroku](https://www.heroku.com/) is here to the rescue, it has a free plan and it's incredibly fast to setup.

I will walk you through some steps to have an app deployed.

<!--more-->

* Start by creating an account in Heroku. [Sign up](https://signup.heroku.com/login)
* Now login and create a new App

<img src="{{ site.baseurl }}/images/posts/heroku1.png" alt=""/>

* Now with your app created, you can use **Heroku's Git**, use **Github** or even **Dropbox**.

<img src="{{ site.baseurl }}/images/posts/heroku2.png" alt=""/>

* In my case I used a repo from my Github [HerokuDemo](https://github.com/yconoclast/herokudemo)
* Now I'm going to deploy my app from my master branch.

<img src="{{ site.baseurl }}/images/posts/heroku3.png" alt=""/>

* To **start your app**, Heroku will run the command `npm start`
    * If you want to run specific commands to a [Procfile](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
* You can define also variables, for example, if you have some API token
<img src="{{ site.baseurl }}/images/posts/heroku4.png" alt=""/>
* You can see the example [here](https://arcane-brook-1170.herokuapp.com/)


<a href="https://arcane-brook-1170.herokuapp.com/" target="_blank">
<img src="{{ site.baseurl }}/images/posts/heroku5.png" alt=""/>
</a>




