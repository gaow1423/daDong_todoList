import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

const Section = styled(({ mr, ...rest }) => <Box {...rest} />)`
  display: flex;
  align-items: center;
  margin-right: ${props => (props.mr ? 8 : 0)}px;
`

export default Section
