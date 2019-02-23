import React, { Component } from 'react';
import styled from 'styled-components';
import Appbar from './components/Appbar/Appbar';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';

import {
    HashRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';



const Div = styled.div`
    min-height: 1000px;
    width: 100vw;
    background-color: #e0e0e0;
    position: relative;
`


class App extends Component {
  render() {
    return (
        <HashRouter>
            <React.Fragment>
                <Appbar />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={MoviesContainer}
                    />
                    <Route
                        exact
                        path="/details/:id"
                        component={MoviesContainer}
                    />
                </Switch>
            </React.Fragment>
        </HashRouter>
    );
  }
}

export default App;
