import React, { Component } from 'react';
import styled from 'styled-components';
import MovieCardGql from '../MovieCard/MovieCard';

import Icon from 'react-icons-kit';
import { ic_arrow_drop_down } from 'react-icons-kit/md/ic_arrow_drop_down'
import { ic_arrow_drop_up } from 'react-icons-kit/md/ic_arrow_drop_up'
import onClickOutside from "react-onclickoutside";

import FilterList from './FilterList';

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
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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




class SearchContainer extends Component {

    render() {
        return (
            <Root>
                <Div>
                    <Heading>
                        Search Results
                    </Heading>
                </Div>
                <Grid>
                    <MovieCardGql />
                </Grid>
            </Root>
        );
    }
}

export default SearchContainer;