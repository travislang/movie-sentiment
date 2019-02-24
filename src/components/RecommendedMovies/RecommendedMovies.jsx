import React, { Component } from 'react';
import styled from 'styled-components';
import RecommendedMovieCard from './RecommendedMovieCard';

const Root = styled.div`
    box-sizing: border-box;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-rows: 200px;
`

const Heading = styled.p`
    font-size: 1.5em;
    letter-spacing: 1px;
    border-left: 3px solid #d2202f;
    color: white;
    margin: 0;
    vertical-align: center;
    padding: 10px;
    margin-bottom: 15px;
`


class RecommendedMovies extends Component {


    render() {
        return (
            <Root>
                <Heading>
                    Recommended Movies
                </Heading>
                <Grid>
                    <RecommendedMovieCard movieId={this.props.movieId} />
                </Grid>
            </Root>
        );
    }
}

export default RecommendedMovies;