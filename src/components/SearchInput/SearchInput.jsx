import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search'

const Root = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Searchbar = styled.input`
    min-height: 50px;
    flex-grow: 1;
    background-color: #191919;
    position: relative;
    border-image: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); 
    border-width: 2px;
    border-image-slice: 1;
    padding: 4px 12px;
    color: white;
    font-size: 1.75em;
`

const Button = styled.button`
    &:hover {
        cursor: pointer;
    }
    .searchIcon{
        color: white;
        padding: 8px;
    }
    .searchIcon:hover {
        color: #9e9e9e;
    }
    .searchIcon:active {
        color: #616161;
    }
`

class SearchInput extends Component {
    render() {
        return (
            <Root>
                <Searchbar type='search' placeholder='Search for a movie...' />
                <Button>
                    <Icon
                        size={45}
                        className='searchIcon'
                        icon={search} 
                    />
                </Button>
            </Root>
        );
    }
}

export default SearchInput;