# Punk API

![Punk API Project](https://github.com/iKarans/Punk-API/blob/main/Beers-Api.png)

## Introduction

A beers filter website desgined using React.JS, SCSS and firebase for a desktop resolution.

The beers are fetched from the <a href="https://punkapi.com/" target="_">Punk API</a> and all the beers are shown by default. The search box in the header allows you to search through the beers using their names. This can be chained on with the pH and ABV slider which have have the current filter value next to them. If you want to reset the sliders, slide them back to the start.

If you want to unlock additional features, then you will have to sign in using the login button on the top right. This is done through firebase authentication with google as the provider (you will need a google account). You will now be able to favourite different beers by clicking the heart on the tile which will turn red. You will now be able to click the favourites in the header which previously would've redirected back to home without signing in. You will be presented with a carousel of your favourited beers. By clicking the heart again, this will remove the beers from yoour favourites. Even if you come back to the website the next day, you will still see your beers in the carousel. This is done by storing the favourited beers in firebase's cloud database.

## Link to Site

https://punk-api-aaea6.web.app/

## To-Dos/Improvement

* Make website responsive.
* Better CSS
* Add params for favourited beers.
