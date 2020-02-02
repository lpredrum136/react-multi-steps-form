import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  TextField,
  Toolbar,
  IconButton,
  Typography,
  Box,
  // FormControl,
  Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  textField: {
    width: '500px'
  }
})

const FormUserDetails = ({ nextStep, onChangeData, values }) => {
  const classes = useStyles()

  const goNext = event => {
    event.preventDefault()
    nextStep()
  }

  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Form User Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Box mt={5}>
        <TextField
          name='firstName'
          label='First Name'
          helperText='Enter your first name'
          defaultValue={values.firstName}
          onChange={onChangeData}
          margin='normal'
          className={classes.textField}
        />
        <br />
        <TextField
          name='lastName'
          label='Last Name'
          helperText='Enter your last name'
          defaultValue={values.lastName}
          onChange={onChangeData}
          margin='normal'
          className={classes.textField}
        />
        <br />
        <TextField
          name='email'
          label='Email'
          helperText='Enter your email'
          defaultValue={values.email}
          onChange={onChangeData}
          margin='normal'
          className={classes.textField}
        />
        <br />
        <Button variant='contained' color='primary' onClick={goNext}>
          Continue
        </Button>
      </Box>
    </Fragment>
  )
}

FormUserDetails.propTypes = {
  nextStep: PropTypes.func.isRequired,
  onChangeData: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}

export default FormUserDetails
