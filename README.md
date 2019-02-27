
## IntelliFlix

A full Stack movie information application that uses Twitter tweets to generate a movie rating based on sentimental analysis to give users a rating based on real peoples opinions.  It also uses GraphQL for a baxckend API and has search and filter functionality along with generating similar and recommended movies.

## Screen Shots
![screenshot](/public/assets/home-page.png)

![screenshot](/public/assets/movie-details.png)

![screenshot](/public/assets/similar-movies.png)

## Built With

- Node
- Express
- PostgreSQL
- React
- GraphQL
- Apollo Server
- Apollo Client
- Styled-Components
- sequelize

## Demo

To view a live demo of the app please visit [https://intelliflix.herokuapp.com](https://intelliflix.herokuapp.com)

It is hosted on heroku's free tier so please allow a few moments for the heroku server to spin up.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [postgreSQL](https://www.postgresql.org/)

## Setting up the environment

Next you will need to create an ```.env``` file that has the following fields:
TMDBAPI={YOUR_API_KEY
TWITTER_BEARER_TOKEN={YOUR_0AUTH2 BEARER TOKEN}

```TMDBAPI``` is a TMDB (similar to IMDB but has an API) api key that you will need to generate.

The ```TWITTER_BEARER_TOKEN``` is needed to get the tweet data from twitter.  You will have to register for a developer account with twitter and then create an app.  These steps will explain further [https://developer.twitter.com/en/apply-for-access.html](https://developer.twitter.com/en/apply-for-access.html)


### Completed Features

- [x] Search Movies
- [x] Filter Movies
- [x] Infinite scroll loading of movies
- [x] Twitter Rating
- [x] Similar & Recommended movies


### Next Steps

- [ ] work on improving code performance
- [ ] Add more filter options



## Author

* Travis Lang


## Acknowledgments

* Thanks to all of the developers of the open source software that was used
