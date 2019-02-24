import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Div = styled.div`

`
const Li =  styled.li`
    list-style: none;
    color: white;
    padding: 5px 0;
    cursor: pointer;
`

const handleClick = (props, id) => {
    props.history.push(`/genre/${id}`)
}

const FilterList = (props) => (
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

            return (
                <ul style={{margin: 0, padding: '0 15px'}}>
                    {data.getGenres.map(({ name, id }) => (
                        <Li key={id} onClick={() => handleClick(props, id)}>
                            {name}
                        </Li>
                    ))}
                </ul>
            )
        }}
    </Query>
);

export default withRouter(FilterList);