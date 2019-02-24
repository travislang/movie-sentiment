import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search'

// 20D24A

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Searchbar = styled.input`
    min-height: 40px;
    width: 30vw;
    background-color: #252525;
    border: 2px solid #d2202f;
    padding: 4px 52px 4px 24px;
    color: white;
    font-size: 1.25em;
    font-weight: 200;
    border-radius: 30px;
`

const Button = styled.button`
    position: absolute;
    top: 0;
    right: 8px;
    &:hover {
        cursor: pointer;
    }
    .searchIcon{
        color: #9e9e9e;
        padding: 8px;
    }
    .searchIcon:hover {
        color: white;
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
                        size={20}
                        className='searchIcon'
                        icon={search} 
                    />
                </Button>
            </Root>
        );
    }
}

export default SearchInput;