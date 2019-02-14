import React, { Component } from 'react';
import styled from 'styled-components';
import AppLogo from './AppLogo';

const Div = styled.div`
    height: 55px;
    width: 100vw;
    background-color: #191919;
    padding: 8px 32px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`
const AppLogoContainer = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    margin: 0;
    padding-left: 8px;
    letter-spacing: 3px;
`
const TitleSpan = styled(Title)`
    font-weight: 200;
`

class Appbar extends Component {
    render() {
        return (
            <Div>
                <AppLogoContainer>
                    {AppLogo}
                    <Title>
                        <TitleSpan as="span">Movie</TitleSpan>
                        Ai
                    </Title>
                </AppLogoContainer>
            </Div>
        );
    }
}

export default Appbar;