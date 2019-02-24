const sequelize = require('./modules/orm.config');
const Genre = require('./models/genre.model');
const axios = require('axios');
Genre.sync();


// type Movie {
//     name: String!
//     posterPath: String!
//     genres: [Genre!]!
//     overview: String!
//     releaseDate: String!
// }
const getMovieGenres = (parent, args, context, info) => {
    if(parent.genre_ids){
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
            return Genre.findAll({raw: true})
            .then(result => {
                return result;
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
            return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDBAPI}&language=en-US&query=${args.title}&page=1&include_adult=false`)
                .then(response => {
                    return response.data.results
                })
        }
    },
}