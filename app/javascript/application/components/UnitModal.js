import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { 
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap'

const defaultUnit = {
  number: '',
  area: ''
}

const UnitModal = (props) => {
  const [currentData, setData] = useState(() => {
    const defaultData = props.data || {}
    return {
      number: '',
      area: '',
      ...defaultData
    }
  })
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (props.data) {
      setData(props.data)
    }
  }, [props.data])

  const setValue = (field, value) => {
    setData(prev => setData({ ...prev, [field]: value }))
  }

  const onInputChange = (e) => {
    setValue(e.target.name, e.target.value)
  }

  const handleSave = (e) => {
    e.preventDefault()

    if (currentData.number === '' || currentData.area === '') {
      setErrorMessage('Please fill the form fields')
      setTimeout(() => setErrorMessage(null), 5000)
    } else {
      props.onSave(currentData)
      setData(defaultUnit)
    }
  }

  if (!currentData) {
    return
  }

  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        {props.data ? 'Edit': 'Add New'} Unit 
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="number">Number</Label>
          <Input 
            type="text"
            name="number"
            id="number"
            placeholder="Enter Unit Number"
            value={currentData.number}
            onChange={onInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="area">Area</Label>
          <Input 
            type="text"
            name="area"
            id="area"
            placeholder="Enter Unit Area"
            value={currentData.area}
            onChange={onInputChange}
            required
          />
        </FormGroup>
        <Button onClick={handleSave}>Save</Button>
        {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
      </ModalBody>
    </Modal>
  )
}

UnitModal.propTypes = {
  data: PropTypes.object,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default UnitModal
