const sequelize = require('./modules/orm.config');
const Genre = require('./models/genre.model');
const axios = require('axios');
const Sentiment = require('sentiment');
const sentiment = new Sentiment;

Genre.sync();


const getMovieGenres = (parent, args, context, info) => {
    if (parent.genre_ids) {
        return Genre.findAll({
            raw: true,
            where: {
                id: parent.genre_ids
            }
        }).then(result => {
            return result;
        })
    }
    else {
        let genreArr = [];
        parent.genres.map(genre => {
            genreArr.push(genre.id)
        })
        return Genre.findAll({
            raw: true,
            where: {
                id: genreArr
            }
        }).then(result => {
            return result;
        })
    }

}

module.exports = {
    Genre: {
        id: (parent, args, context, info) => {
            return parent.id;
        },
        name: (parent, args, context, info) => {
            return parent.genre_name;
        },
    },
    Person: {
        id: (parent, args, context, info) => {
            return parent.cast_id;
        },
        name: (parent, args, context, info) => {
            return parent.name;
        },
        profilePath: (parent, args, context, info) => {
            return parent.profile_path;
        },
    },
    Movie: {
        name: (parent, args, context, info) => {
            return parent.title;
        },
        id: (parent, args, context, info) => {
            return parent.id;
        },
        posterPath: (parent, args, context, info) => {
            return parent.poster_path;
        },
        backdropPath: (parent, args, context, info) => {
            return parent.backdrop_path;
        },
        genres: (parent, args, context, info) => {
            return getMovieGenres(parent)
        },
        overview: (parent, args, context, info) => {
            return parent.overview;
        },
        releaseDate: (parent, args, context, info) => {
            return parent.release_date;
        },
        tagline: (parent, args, context, info) => {
            return parent.tagline;
        },
    },

    Query: {
        genre: (parent, args, context, info) => {
            return Genre.findById(args.id)
                .then(result => {
                    return result.dataValues;
                })
        },
        getGenres: (parent, args, context, info) => {
            return Genre.findAll({ raw: true })
                .then(result => {
                    return result;
                })
        },
        getCast: (parent, args, context, info) => {
            return axios.get(`https://api.themoviedb.org/3/movie/${args.movieId}/credits?api_key=${process.env.TMDBAPI}`)
                .then(response => {
                    return response.data.cast
                })
        },
        getPopularMovies: (parent, args, context, info) => {
            return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDBAPI}&language=en-US&page=${args.page}`)
                .then(response => {
                    return response.data.results
                })
        },
        getRecommendedMovies: (parent, args, context, info) => {
            return axios.get(`https://api.themoviedb.org/3/movie/${args.movieId}/recommendations?api_key=${process.env.TMDBAPI}&language=en-US&page=${args.page}`)
                .then(response => {
                    return response.data.results
                })
        },
        discoverMovies: (parent, args, context, info) => {
            return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDBAPI}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${args.page}&with_genres=${args.genre}`)
                .then(response => {
                    return response.data.results
                })
        },
        getSimilarMovies: (parent, args, context, info) => {
            return axios.get(`https://api.themoviedb.org/3/movie/${args.movieId}/similar?api_key=${process.env.TMDBAPI}&language=en-US&page=${args.page}`)
                .then(response => {
                    return response.data.results
                })
        },
        movieDetails: (parent, args, context, info) => {
            return axios.get(`https://api.themoviedb.org/3/movie/${args.movieId}?api_key=${process.env.TMDBAPI}&language=en-US`)
                .then(response => {
                    return response.data
                })
        },
        searchMovie: (parent, args, context, info) => {
            console.log('in search movies', args.title);
            
            return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDBAPI}&language=en-US&query=${args.title}&page=1&include_adult=false`)
                .then(response => {
                    return response.data.results
                })
        },
        getTweetRating: (parent, args, context, info) => {
            console.log('args', args.term);
            
            return axios({
                method: 'GET',
                url: `https://api.twitter.com/1.1/search/tweets.json?q=${args.term}%20movie&lang=en`,
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
                }
            })
                .then(response => {
                    return analyzeTweets(response.data.statuses);
                })
                .catch(err => {
                    console.log('error in axios', err);
                })
        },
    },
}

function analyzeTweets(tweets) {
    let rating = 0;
    let count = 0;
    for(tweet of tweets) {
        let result = sentiment.analyze(tweet.text);
        if(result.comparative != 0) {
            count++;
        }
        rating += result.comparative;
    }
    rating = rating / count;
    return rating;
}