import React, { Component } from 'react';
import { NavLink, Link, withRouter} from 'react-router-dom';
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
const Title = styled.h3`
    margin: 0;
    padding: 5px;
    color: white;
`

const handleClick = (props, id) => {
    props.history.push(`/details/${id}`)
}


const QUERY = gql`
        query getPopularMovies($page: Int) {
            getPopularMovies(page: $page) {
                id
                name
                posterPath
            }
        }
    `
class MovieFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 1}
        console.log('create', props.onLoadMore);
            
            window.onscroll = () => {
                console.log('document.documentElement.offsetHeight', document.documentElement.offsetHeight);
                
                if (
                    window.innerHeight + document.documentElement.scrollTop
                    >= document.documentElement.offsetHeight - 100
                ) {
                    this.setState({
                        page: this.state.page + 1
                    })
                    props.onLoadMore(this.state.page);
                }
            };
        }


    render() {
        const { movies = [], onLoadMore, ...props } = this.props;
        return (
            <>
                {movies.map(({ name, id, posterPath }) => (
                    <Div key={id}>
                        <Img onClick={() => handleClick(props, id)} src={`http://image.tmdb.org/t/p/w342/${posterPath}`} />
                        <Title>
                            {name}
                        </Title>
                    </Div>
                ))}
            </>
        )
    }
}


const MovieCard = (props) => (
    <Query
        query={QUERY}
        variables={{
            page: 1
        }}
    >
        {({ loading, error, data, fetchMore, variables }) => {
            
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
                console.log('d', variables);
                
            return (
                <MovieFeed 
                    movies={data.getPopularMovies || []} 
                    onLoadMore={(page) => {
                        console.log('inloadmore', page);
                        
                        return (fetchMore({
                            variables: {
                                page: page,
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                                if (!fetchMoreResult) return prev;
                                return Object.assign({}, prev, {
                                    getPopularMovies: [...prev.getPopularMovies, ...fetchMoreResult.getPopularMovies],
                                });
                            },
                        }))
                    }
                        
                    }
                />
            )
            
            
        }}
    </Query>
);

export default withRouter(MovieCard);