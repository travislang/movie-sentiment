import React, { Component } from 'react';
import styled from 'styled-components';
import SimilarMoviesCard from './SimilarMoviesCard';

const Root = styled.div`
    box-sizing: border-box;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Grid = styled.div`
    width: 100%;
    max-height: 420px;
    overflow-y: scroll;
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


class SimilarMovies extends Component {


    render() {
        return (
            <Root>
                <Heading>
                    Similar Movies
                </Heading>
                <Grid>
                    <SimilarMoviesCard movieId={this.props.movieId} />
                </Grid>
            </Root>
        );
    }
}

export default SimilarMovies;