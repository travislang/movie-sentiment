import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Div = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

const ImgDiv = styled.div`
    width: 100vw;
    min-height: 500px;
    background-color: blue;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h3`
    margin: 0;
    padding: 5px;
    color: grey;
`

const MovieDetails = (props) => {
    const movieId = Number(props.match.params.id);

    return (
        <Query
            query={gql`
        {
            movieDetails (movieId: ${movieId}){
                id
                name
                backdropPath
            }
        }
    `}
        >
            {({ loading, error, data }) => {
                const movie = data.movieDetails;

                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (
                    <Div>
                        <ImgDiv>
                            <Img src={`http://image.tmdb.org/t/p/w1280/${movie.backdropPath}`} />
                        </ImgDiv>

                        <Title>
                            {movie.name}
                        </Title>
                    </Div>
                )
            }}
        </Query>
    )
}

export default withRouter(MovieDetails);