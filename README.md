# Financial Times Tech Test

Available on Heroku: https://ft-tech-test-shoniwa.herokuapp.com/

## Objectives

* Build a website that shows a list of news headlines from Financial Times. You may use our Developer APIs to achieve this.

* Provide a search box for users to search for headlines containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).

* Provide pagination for results, at 20 results per page.

## Specification

* Server-rendered
* Progressively enhanced
* Responsive
* Accessible
* Be built using Javascript and node.js
* Be deployed on Heroku
* Not rely too heavily on client-side frameworks (i.e. Angular, React) or libraries like jQuery
* Have a similar look and feel as ft.com
* Be performant over 3G networks

## User Stories

1. As a User, so that I can browse the news I would like the website to display a list of headlines from the financial times on a website.
2. As a User, so that I can look for specific headlines I would like to be able to search using keywords
3. As a User, so that I can see the headlines in an orderly manner I would like to see the headlines paginated
4. As a User, so that I can keep my pages orderly I would like to limit each page to a maximum of 20 headlines
5. As a User, so that I can use the website on different devices I would like the website to be responsive
6. As a User, so that I can use the website accurately on different browsers I would like the website to be rendered from the server

|Nouns|Verbs|
|-----|-----|
|News|Browse|
|Headlines|Display|
|FT|List|
|Keywords|Search|
|Pages|Paginate|
|Website|Responsive|
|Devices|Rendered|
|Browsers|

## Domain Models

Website — Display —> Headlines — From —> Financial Times
Website — Search —> Headlines —> Use —> keywords
Website — Paginate —> Headlines —> Pages
Pages — Limit —> Headlines
Website — Responsive —> Device
Website — Render —> Server

<!-- ### Website

|Properties|Methods|
|----------|-------|

|Properties|Methods|
|----------|-------|

|Properties|Methods|
|----------|-------| -->
