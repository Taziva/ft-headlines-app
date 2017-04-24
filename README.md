# Financial Times Headlines Application

Available on Heroku: https://ft-headlines-sho3.herokuapp.com/

## Specification

* Build a website that shows a list of news headlines from Financial Times using the FT search api

* Provide a search box for users to search for headlines containing specific words (i.e. searching for "brexit" returns a list of brexit-related headlines).

* Provide pagination for results, at 20 results per page.

## Techniques

* Progressively enhanced
* Responsive
* Accessible
* Built using Javascript and node.js
* Be deployed on Heroku

## User Stories

1. As a User, so that I can browse the news I would like the website to display a list of headlines from the financial times on a website.
2. As a User, so that I can look for specific headlines I would like to be able to search using keywords
3. As a User, so that I can see the headlines in an orderly manner I would like to see the headlines paginated
4. As a User, so that I can keep my pages orderly I would like to limit each page to a maximum of 20 headlines
5. As a User, so that I can use the website on different devices I would like the website to be responsive
6. As a User, so that I can use the website accurately on different browsers I would like the website to be rendered from the server


## Domain Models

Website — Display —> Headlines — From —> Financial Times  
Website — Search —> Headlines —> Use —> keywords  
Website — Paginate —> Headlines —> Pages  
Pages — Limit —> Headlines  
Website — Responsive —> Device  
Website — Render —> Server  
