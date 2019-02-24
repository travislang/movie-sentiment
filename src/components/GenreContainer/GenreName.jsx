import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Heading = styled.p`
    font-size: 2.5em;
    letter-spacing: 1px;
    max-width: 50vw;
    border-left: 3px solid #d2202f;
    color: white;
    margin: 0;
    vertical-align: center;
    padding: 15px;
    margin-bottom: 25px;
`


const GenreName = (props) => (
    <Query
        query={gql`
      {
        genre(id: ${props.genreId}) {
            name
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            console.log(data);
            
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
                <Heading>
                    {data.genre.name}
                </Heading>
            )
        }}
    </Query>
);

export default withRouter(GenreName);