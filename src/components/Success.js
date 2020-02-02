import React, { Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { makeStyles } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}))

const Success = props => {
  const classes = useStyles()

  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Success
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Thank you for your submission</h1>
      <p>You will get a confirmation email soon</p>
    </Fragment>
  )
}

export default Success
