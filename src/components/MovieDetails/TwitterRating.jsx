import React, { Component } from 'react';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Icon from 'react-icons-kit';
import { spinner10 } from 'react-icons-kit/icomoon/spinner10'

const Loader = styled(Icon)`
    animation-duration: 3s;
    animation-name: spin;
    animation-iteration-count: infinite;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`

const TwitterRating = ({searchTerm}) => (
    <Query
        query={gql`
            query getTweetRating($term: String!) {
                getTweetRating(term: $term)
            }
        `}
        variables={{
            term: searchTerm
        }}
    >
        {({ loading, error, data: {getTweetRating} }) => {
            if (loading) return <Loader size={30} icon={spinner10} />;
            if (error) return <p>Error :(</p>;
            let tweetRating = Number(getTweetRating).toFixed(2);
            tweetRating = (tweetRating * 10).toFixed(1);
            tweetRating = Number(tweetRating) + 5;
            return (
                <span>
                    {tweetRating}/10
                </span>
            )
        }}
    </Query>
);

export default TwitterRating;