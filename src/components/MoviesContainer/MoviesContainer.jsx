import React, { Component } from 'react';
import styled from 'styled-components';
import {MovieCard} from '../MovieCard/MovieCard';

const Root = styled.div`
    box-sizing: border-box;
    padding: 0 50px;
    padding-top: 155px;
    min-height: calc(100vh);
    width: 100vw;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 300px;
`

const Heading = styled.p`
    font-size: 2.5em;
    letter-spacing: 1px;
    max-width: 50vw;
    text-align: center;
    color: #d2202f;
    margin: 0;
    padding-bottom: 100px;
`


class HeroContainer extends Component {
    render() {
        return (
            <Root>
                <Heading>
                    Popular Movies
                </Heading>
                <Grid>
                    <MovieCard />
                </Grid>
            </Root>
        );
    }
}

export default HeroContainer;