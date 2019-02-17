import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from "apollo-boost";

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "/graphql"
});

render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));


