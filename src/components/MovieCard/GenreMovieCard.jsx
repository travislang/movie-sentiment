import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
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
    cursor: pointer;
`
const Title = styled.h3`
    margin: 0;
    padding: 5px;
    color: white;
`

const handleClick = (props, id) => {
    props.history.push(`/details/${id}`)
}

const GenreMovieCard = (props) => (
    <Query
        query={gql`
      {
        discoverMovies(genre: ${props.genreId}) {
            id
            name
            posterPath
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.discoverMovies.map(({ name, id, posterPath }) => (
                <Div key={id}>
                    <Img onClick={() => handleClick(props, id)} src={`http://image.tmdb.org/t/p/w342/${posterPath}`} />
                    <Title>
                        {name}
                    </Title>
                </Div>
            ));
        }}
    </Query>
);

export default withRouter(GenreMovieCard);