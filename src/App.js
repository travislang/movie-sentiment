import React, { Component } from 'react';
import styled from 'styled-components';
import Appbar from './components/Appbar/Appbar';
import HeroContainer from './components/HeroContainer/HeroContainer';

const Div = styled.div`
    min-height: 1000px;
    width: 100vw;
    background-color: white;
    position: relative;
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
