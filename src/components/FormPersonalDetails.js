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

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  textField: {
    width: '500px'
  },
  button: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const FormPersonalDetails = ({ nextStep, prevStep, onChangeData, values }) => {
  const classes = useStyles()

  const goNext = event => {
    event.preventDefault()
    nextStep()
  }

  const goBack = event => {
    event.preventDefault()
    prevStep()
  }

  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Form Personal Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Box mt={5}>
        <TextField
          name='occupation'
          label='Occupation'
          helperText='Enter your occupation'
          defaultValue={values.occupation}
          onChange={onChangeData}
          margin='normal'
          className={classes.textField}
        />
        <br />
        <TextField
          name='city'
          label='City'
          helperText='Enter your city'
          defaultValue={values.city}
          onChange={onChangeData}
          margin='normal'
          className={classes.textField}
        />
        <br />
        <TextField
          name='bio'
          label='Bio'
          helperText='Enter your bio'
          defaultValue={values.bio}
          onChange={onChangeData}
          margin='normal'
          className={classes.textField}
        />
        <br />
        <div className={classes.button}>
          <Button variant='contained' color='primary' onClick={goNext}>
            Continue
          </Button>
          <Button variant='contained' onClick={goBack}>
            Back
          </Button>
        </div>
      </Box>
    </Fragment>
  )
}

FormPersonalDetails.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  onChangeData: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}

export default FormPersonalDetails
