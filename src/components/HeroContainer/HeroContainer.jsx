import React, { Component } from 'react';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search'

const Root = styled.div`
    height: calc(100vh);
    width: 100vw;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 300px 0px;
`

class HeroContainer extends Component {
    render() {
        return (
            <Root>
                <SearchInput />
            </Root>
        );
    }
}

export default HeroContainer;