---
layout: post
title: 6 Steps of Web Development Process
category: web
---

In every project I like to take some steps that I find to be really important to have a **Maintainable Web App with Quality**, if some of this steps aren't part of your daily basis, maybe you should rethink the way you are developing.
We all have different processes for developing, but these are the steps that I would like to follow in every project that I work.

1. <a href="/web/2015/08/17/Steps-Web-Development/#1">Have an User Story / Ticket with all the information needed</a>
2. <a href="/web/2015/08/17/Steps-Web-Development/#2">Create a specific branch for it</a>
3. <a href="/web/2015/08/17/Steps-Web-Development/#3">Start Coding / End Coding</a>
4. <a href="/web/2015/08/17/Steps-Web-Development/#4">Test in every supported browser</a>
5. <a href="/web/2015/08/17/Steps-Web-Development/#5">Create tests (unit, integration) / Static Analysis</a>
6. <a href="/web/2015/08/17/Steps-Web-Development/#6">Create Pull Request</a>

<!--more-->

<h2 id="1">User Story</h2>
* Visuals
    * Mobile / Tablet / Desktop
* Interactions / Animations
* Google Analytics
* Good understanding of what I need to implement
* **If the User Story isn't well defined I won't start the development**

<h2 id="2">Branch</h2>

* If it doesn't have any dependencies create a new branch from master
* Otherwise, create a new branch from the branch that you depend

<h2 id="3">Code</h2>

* **Think about the best solution for the problem**, here I spend some thing
* Implement everything specified in the User Story
* If I'm proud of the Code I've done I will push my changes to my branch
* Otherwise I spend some more time trying to implement a better solution


<h2 id="4">Browser Testing</h2>

* Do a quick run for all supported browsers

<h2 id="5">Testing</h2>
* Linting Passing
    * Javascript
    * CSS
* Implement Unit tests
* Implement Automated Selenium tests
* Implement Automated Selenium tests with Mocks, if needed


<h2 id="6">Pull Request</h2>

* In this step I just want my code to by reviewed by someone else

**Do you have any suggestions?**
