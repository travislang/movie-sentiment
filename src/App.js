import React, { Component } from 'react';
import styled from 'styled-components';
import Appbar from './components/Appbar/Appbar';
import HeroContainer from './components/HeroContainer/HeroContainer';

const Div = styled.div`
    min-height: 100vh;
    width: 100vw;
    padding-top: 70px;
    background-color: #191919;
    position: relative;
`

const Title = styled.h1`
    color: white;
`

class App extends Component {
  render() {
    return (
      <Div>
        <Appbar />
        <HeroContainer />
      </Div>
    );
  }
}

export default App;
