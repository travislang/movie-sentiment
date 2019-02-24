import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import RecommendedMovies from '../RecommendedMovies/RecommendedMovies';
import SimilarMovies from '../SimilarMovies/SimilarMovies';

const Div = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #191919;
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
const Title = styled.h1`
    margin: 0;
    padding: 5px;
    color: white;
`
const Tagline = styled.h3`
    margin: 0;
    padding: 5px;
    color: #bdbdbd;
`
const DetailsDiv = styled.div`
    min-width: 100vw;
    padding-top: 25px;
    padding-bottom: 100px;
`

const DetailsContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 1080px;
    
`
const DetailsHeader = styled.div`
    display: flex;
    width: 100vw;
    max-width: 1080px;
    justify-content: space-between;
    margin-bottom: 25px;
`
const DetailsBody = styled.div`
    display: flex;
    width: 100vw;
    max-width: 1080px;
    margin-bottom: 25px;
`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
    flex: 60% 1 1;
    padding: 1em;
`
const Genres = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex: 40% 1 1;
    padding: 1em;
`
const Li = styled.li`
    list-style: none;
    color: white;
    text-align: end;
    padding: 5px;
`
const MoreMovies = styled.div`
    display: flex;
    justify-content: space-between;
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
                tagline
                backdropPath
                overview
                genres {
                    name
                }
            }
        }
    `}
        >
            {({ loading, error, data }) => {
                const movie = data.movieDetails;
                console.log('p', movie);
                
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (
                    <Div>
                        <ImgDiv style={{ background: `center/cover url(http://image.tmdb.org/t/p/w1280/${movie.backdropPath})`}}>
                            
                        </ImgDiv>
                        <DetailsDiv>
                            <DetailsContainer>
                                <DetailsHeader>
                                    <div style={{ borderLeft: '3px solid #d2202f', paddingLeft: 10}}>
                                        <Title>{movie.name}</Title>
                                        <Tagline>{movie.tagline}</Tagline>
                                    </div>
                                    <div>
                                        <Title>
                                            IntelliRating: 
                                            <span style={{fontWeight: 300, paddingLeft: 10}}>
                                                8.9/10
                                            </span>
                                        </Title>
                                    </div>
                                </DetailsHeader>
                                <DetailsBody>
                                    <Summary>
                                        <h2 style={{ color: '#d2202f', margin: 0 }}>Summary</h2>
                                        <p style={{color: 'white', lineHeight: '1.3em'}}>
                                            {movie.overview}
                                        </p>
                                    </Summary>
                                    <Genres>
                                        <h2 style={{ color: '#d2202f', textAlign: 'end', margin: 0}}>Genres:</h2>
                                        <ul>
                                            {movie.genres.map((genre, i) => {
                                                return (
                                                    <Li key={i}>
                                                        {genre.name}
                                                    </Li>
                                                )
                                            })}
                                        </ul>
                                    </Genres>
                                </DetailsBody>
                                <MoreMovies>
                                    <RecommendedMovies movieId={movieId} />
                                    <SimilarMovies movieId={movieId} />
                                </MoreMovies>
                            </DetailsContainer>
                        </DetailsDiv>
                    </Div>
                )
            }}
        </Query>
    )
}

export default withRouter(MovieDetails);