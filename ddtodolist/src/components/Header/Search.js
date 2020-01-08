import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'

const Wrapper = styled(Paper)`
  padding: 2px 4px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 600px;
`

const Input = styled(InputBase)`
  margin-left: 8;
  flex: 1;
`

const SearchButton = styled(IconButton).attrs({
  'aria-label': 'Search',
})`
  && {
    padding: 0;
  }
`

const Search = () => (
  <Wrapper>
    <Input />
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </Wrapper>
)

export default Search
