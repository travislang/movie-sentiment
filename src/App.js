import React, { Component } from 'react';
import styled from 'styled-components';
import Appbar from './components/Appbar/Appbar';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';



const Div = styled.div`
    min-height: 1000px;
    width: 100vw;
    background-color: #e0e0e0;
    position: relative;
`


class App extends Component {
  render() {
    return (
        <Div>
            <Appbar />
            <MoviesContainer />
        </Div>
    );
  }
}

export default App;
