import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Div = styled.div`
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    width: 100%;
    height: 90%;
    object-fit: contain;
    cursor: pointer;
`
const Title = styled.h6`
    margin: 0;
    padding: 5px;
    color: white;
`

const CastCard = (props) => (
    <Query
        query={gql`
      {
        getCast(movieId: ${props.movieId}) {
            id
            name
            profilePath
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.getCast.map(({ name, id, profilePath }) => (
                <Div key={id}>
                    {profilePath ?
                        <Img src={`http://image.tmdb.org/t/p/w185/${profilePath}`} />
                        :
                        <Img src={`assets/empty-profile-pic.jpg`} />
                    }
                    <Title>
                        {name}
                    </Title>
                </Div>
            ));
        }}
    </Query>
);

export default withRouter(CastCard);