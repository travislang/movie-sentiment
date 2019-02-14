import React, { Component } from 'react';
import styled from 'styled-components';
import Appbar from './components/Appbar/Appbar';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #191919;
`

const Title = styled.h1`
    color: white;
`

class App extends Component {
  render() {
    return (
      <Div>
        <Appbar />
      </Div>
    );
  }
}

export default App;
