import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = props => {
  const [formData, setFormData] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })

  const { step, firstName, lastName, email, occupation, city, bio } = formData

  // Proceed to next step
  const nextStep = () => setFormData({ ...formData, step: step + 1 })

  // Go back to prev step
  const prevStep = () => setFormData({ ...formData, step: step - 1 })

  // Handle field change
  const onChangeData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          onChangeData={onChangeData}
          values={formData}
        />
      )
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onChangeData={onChangeData}
          values={formData}
        />
      )
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={formData} />
      )
    case 4:
      return <Success />
    default:
      break
  }
}

UserForm.propTypes = {}

export default UserForm
