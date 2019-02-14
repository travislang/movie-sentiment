import React, { Component } from 'react';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search'

const Root = styled.div`
    height: calc(100vh - 55px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
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