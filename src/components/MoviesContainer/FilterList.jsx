import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Div = styled.div`

`


const handleClick = (props, id) => {
    props.history.push(`/details/${id}`)
}

const RecommendedMovieCard = (props) => (
    <Query
        query={gql`
      {
        getGenres {
            id
            name
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.getGenres.map(({ name, id }) => (
                <Div key={id}>
                    <Img onClick={() => handleClick(props, id)} src={`http://image.tmdb.org/t/p/w342/${posterPath}`} />
                    <Title>
                        {name}
                    </Title>
                </Div>
            ));
        }}
    </Query>
);

export default withRouter(RecommendedMovieCard);