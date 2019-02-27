import React, { Component } from 'react';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

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
            if (loading) return <p>Loading...</p>;
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