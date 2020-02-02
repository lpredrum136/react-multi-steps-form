import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'
import EmailIcon from '@material-ui/icons/Email'
import WorkIcon from '@material-ui/icons/Work'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import { makeStyles } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  listItem: {
    width: '500px',
    margin: 'auto'
  },
  button: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const ListItemLink = props => <ListItem button component='a' {...props} />

const Confirm = ({ nextStep, prevStep, values }) => {
  const classes = useStyles()

  const { firstName, lastName, email, occupation, city, bio } = values

  const goNext = event => {
    event.preventDefault()
    // Process form here //
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
            Confirm Your Details
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.listItem}>
        <List component='nav' aria-label='user details'>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='First Name' secondary={firstName} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NaturePeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Last Name' secondary={lastName} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary='Email' secondary={email} />
          </ListItem>
        </List>
        <Divider />
        <List component='nav' aria-label='personal details'>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary='Occupation' secondary={occupation} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary='City' secondary={city} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary='Bio' secondary={bio} />
          </ListItem>
        </List>
      </div>

      <div className={classes.button}>
        <Button variant='contained' color='primary' onClick={goNext}>
          Confirm
        </Button>
        <Button variant='contained' onClick={goBack}>
          Back
        </Button>
      </div>
    </Fragment>
  )
}

Confirm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}

export default Confirm
