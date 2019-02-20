import React, { Component } from 'react';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Div = styled.div`
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    width: 100%;
    height: 90%;
    object-fit: contain;
`
const Title = styled.h3`
    margin: 0;
    padding: 5px;
    color: white;
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
                    <Img src={`http://image.tmdb.org/t/p/w342/${posterPath}`} />
                    <Title>
                        {name}
                    </Title>
                </Div>
            ));
        }}
    </Query>
);