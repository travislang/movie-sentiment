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
const LoaderContainer = styled.span`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const Loader = styled(Icon)`
    height: 58px;
    color: #d2202f;
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

const QUERY = gql`
        query searchMovie($title: String!){
            searchMovie(title: $title){
                id
                name
                posterPath
            }
        }
    `
class MovieFeed extends Component {

    handleClick = (id) => {
        this.props.history.push(`/details/${id}`)
    }

    render() {
        const { movies = [], onLoadMore, ...props } = this.props;
        return (
                movies.length > 0 ?
            <>
                {movies.map(({ name, id, posterPath }) => (
                    <Div key={id}>
                        {posterPath ?
                            <Img onClick={() => this.handleClick(id)} src={`http://image.tmdb.org/t/p/w342/${posterPath}`} />
                            :
                            <Img src={`assets/noimage.jpg`} />
                        }
                        <Title>
                            {name}
                        </Title>
                    </Div>
                ))}
            </>
            :
            <div>
                <h1 style={{color: 'white'}}>No Results...</h1>
            </div>
        )
    }
}

const MovieFeedWithRouter = withRouter(MovieFeed);

const MovieCard = (props) => {
    console.log('path', props.match.params.title);
    
    return (
        <Query
            query={QUERY}
            variables={{
                title: props.match.params.title
            }}
        >
            {({ loading, error, data }) => {

                if (loading) return <LoaderContainer><Loader size={58} icon={spinner10} /></LoaderContainer>;
                if (error) return <p>Error :(</p>;
                return (
                    <MovieFeedWithRouter
                        movies={data.searchMovie || []}
                    />
                )


            }}
        </Query>
    )
}
    

export default withRouter(MovieCard);