import React, { Component } from 'react';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Div = styled.div`
    border: 1px solid white;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


export const MovieCard = () => (
    <Query
        query={gql`
      {
        getPopularMovies {
            id
            name
            posterPath
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            console.log('data', data);
            
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.getPopularMovies.map(({ name, id, posterPath }) => (
                <Div key={id}>
                    <Img src={`http://image.tmdb.org/t/p/w500/${posterPath}`} />
                </Div>
            ));
        }}
    </Query>
);