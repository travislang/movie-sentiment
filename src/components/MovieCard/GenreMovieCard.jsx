import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Icon from 'react-icons-kit';
import { spinner10 } from 'react-icons-kit/icomoon/spinner10'
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

const QUERY = gql`
        query discoverMovies($page: Int, $genre: Int!) {
            discoverMovies(page: $page, genre: $genre) {
                id
                name
                posterPath
            }
        }
    `

class MovieFeed extends Component {

    state = {
        page: 2
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOnScroll);
    }

    handleOnScroll = () => {
        let scrollTop =
            (document.documentElement && document.documentElement.scrollTop);
        let scrollHeight =
            (document.documentElement && document.documentElement.scrollHeight);
        let clientHeight =
            document.documentElement.clientHeight || window.innerHeight;
        let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (scrolledToBottom) {
            this.props.onLoadMore(this.state.page);
            this.setState({
                page: this.state.page + 1
            })
        }
    };

    handleClick = (id) => {
        this.props.history.push(`/details/${id}`)
    }

    render() {
        const { movies = [], onLoadMore, ...props } = this.props;
        return (
            <>
                {movies.map(({ name, id, posterPath }) => (
                    <Div key={id}>
                        <Img onClick={() => this.handleClick(id)} src={`http://image.tmdb.org/t/p/w342/${posterPath}`} />
                        <Title>
                            {name}
                        </Title>
                    </Div>
                ))}
            </>
        )
    }
}

const GenreMovieFeedWithRouter = withRouter(MovieFeed);

const GenreMovieCard = (props) => (
    <Query
        query={QUERY}
        variables={{
            page: 1,
            genre: Number(props.match.params.id)
        }}
    >
        {({ loading, error, data, fetchMore, variables }) => {
            console.log('variables', variables);
            
            if (loading) return <div style={{ color: 'white', width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Icon size={58} icon={spinner10} /></div>;
            if (error) return <p>Error :(</p>;
            
            return (
                <GenreMovieFeedWithRouter
                    movies={data.discoverMovies || []}
                    onLoadMore={(page) => {
                        return (fetchMore({
                            variables: {
                                page: page,
                                genre: variables.genre
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                                if (!fetchMoreResult) return prev;

                                return Object.assign({}, prev, {
                                    discoverMovies: [...prev.discoverMovies, ...fetchMoreResult.discoverMovies],
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

export default withRouter(GenreMovieCard);