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
    return Genre.findAll({
        raw: true,
        where: {
            id: parent.genre_ids
        }
    }).then(result => {
        return result;
    })
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
        genres: (parent, args, context, info) => {
            return getMovieGenres(parent)
        },
        overview: (parent, args, context, info) => {
            return parent.overview;
        },
        releaseDate: (parent, args, context, info) => {
            return parent.release_date;
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