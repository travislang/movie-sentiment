import React, { Component } from 'react';
import styled from 'styled-components';
import MovieCardGql from '../MovieCard/MovieCard';

const Root = styled.div`
    box-sizing: border-box;
    padding: 0 50px;
    padding-top: 155px;
    min-height: calc(100vh);
    width: 100vw;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 400px;
`

const Heading = styled.p`
    font-size: 2.5em;
    letter-spacing: 1px;
    max-width: 50vw;
    border-left: 3px solid #d2202f;
    color: white;
    margin: 0;
    vertical-align: center;
    padding: 15px;
    margin-bottom: 25px;
`


class HeroContainer extends Component {


    render() {
        return (
            <Root>
                <Heading>
                    Popular Movies
                </Heading>
                <Grid>
                    <MovieCardGql />
                </Grid>
            </Root>
        );
    }
}

export default HeroContainer;