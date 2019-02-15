import React, { Component } from 'react';
import styled from 'styled-components';


const Root = styled.div`
    padding-top: 155px;
    height: calc(100vh);
    width: 100vw;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Heading = styled.p`
    font-size: 2.5em;
    letter-spacing: 1px;
    max-width: 50vw;
    text-align: center;
    color: #d2202f;
    margin: 0;
`


class HeroContainer extends Component {
    render() {
        return (
            <Root>
                <Heading>
                    Popular Movies
                </Heading>
            </Root>
        );
    }
}

export default HeroContainer;