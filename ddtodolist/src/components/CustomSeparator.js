import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import styled from 'styled-components'

const StyleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'inherit',
  },
}))

export default function CustomSeparator(props) {
  const classes = useStyles()
  if (props.path === '/fresh-meats') {
    return (
      <div className={classes.root}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="Breadcrumb"
        >
          <StyleLink color="inherit" to="/">
            Data@Tyson
          </StyleLink>
          <Typography color="inherit">Fresh Meats</Typography>
        </Breadcrumbs>
      </div>
    )
  } else if (props.path === '/about') {
    return (
      <div className={classes.root}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="Breadcrumb"
        >
          <StyleLink color="inherit" to="/">
            Data@Tyson
          </StyleLink>
          <Typography color="inherit">About</Typography>
        </Breadcrumbs>
      </div>
    )
  }
  return <div />
}
