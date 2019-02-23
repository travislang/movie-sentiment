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
    min-height: 30vmax;
    margin-top: 71px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        filter: grayscale(50%);
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h1`
    margin: 0;
    padding: 5px;
    font-family: 'Roboto';
    font-size: 7em;
    
    font-weight: bold;
    color: #d2202f;
    z-index: 100;
    text-align: center;
    opacity: 0.75;
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
                        <ImgDiv style={{ background: `center/cover url(http://image.tmdb.org/t/p/w1280/${movie.backdropPath})`}}>
                            <Title>{movie.name}</Title>
                        </ImgDiv>
                    </Div>
                )
            }}
        </Query>
    )
}

export default withRouter(MovieDetails);