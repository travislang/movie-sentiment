import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #212121;
    padding-top: 50px;
`

const Title = styled.h1`
    color: white;
`

class App extends Component {
  render() {
    return (
      <Div>
        <Title>Movie Sentiment</Title>
      </Div>
    );
  }
}

export default App;
