const { ApolloServer, gql } = require('apollo-server-express');


module.exports = gql`
    type Genre {
        id: Int!
        name: String!
    }

    type Person {
        id: Int!
        name: String!
        profilePath: String
    }

    type Movie {
        name: String!
        id: Int!
        posterPath: String!
        backdropPath: String!
        genres: [Genre!]!
        overview: String!
        releaseDate: String!
        tagline: String
    }

    type Query {
        genre(movieId: Int!): Genre!
        getGenres: [Genre!]!
        getPopularMovies(page: Int = 1): [Movie!]!
        getRecommendedMovies(page: Int = 1, movieId: Int!): [Movie!]!
        getSimilarMovies(page: Int = 1, movieId: Int!): [Movie!]!
        getCast(movieId: Int!): [Person!]!
        movieDetails(movieId: Int!): Movie!
        searchMovie(title: String!): [Movie]!
    }
`;

