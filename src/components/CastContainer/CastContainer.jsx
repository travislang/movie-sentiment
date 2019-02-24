import React, { Component } from 'react';
import styled from 'styled-components';
import CastCard from './CastCard'; 

const Root = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50px;
`

const Grid = styled.div`
    max-width: 100%;
    overflow-x: scroll;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(40, minmax(100px, 1fr));
    align-items: start;
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


class CastContainer extends Component {


    render() {
        return (
            <Root>
                <Heading>
                    Cast
                </Heading>
                <Grid>
                    <CastCard movieId={this.props.movieId} />
                </Grid>
            </Root>
        );
    }
}

export default CastContainer;