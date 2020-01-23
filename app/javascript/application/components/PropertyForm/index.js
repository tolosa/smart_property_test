import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import UnitItem from './UnitItem'
import UnitModal from '../UnitModal'

const PropertyForm = (props) => {
  const [currentData, setData] = useState(() => {
    const defaultData = props.data || {}
    return {
      name: '',
      description: '',
      address: '',
      units: [],
      ...defaultData
    }
  })
  const [openModal, setOpenModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [editingIndex, setEditingIndex] = useState(null)

  const isEdit = !!props.data

  const toggleModal = () => {
    if (openModal) {
      setEditingIndex(null)
      setEditingItem(null)
    }
    setOpenModal(!openModal)
  }

  const setValue = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const onInputChange = (e) => {
    setValue(e.target.name, e.target.value)
  }

  const addUnit = (newUnit) => {
    setData(prev => {
      const units = [...prev.units, newUnit]
      return { ...prev, units }
    })
  }

  const updateUnit = (updatedUnit) => {
    setData(prev => {
      prev.units[editingIndex] = updatedUnit
      return { ...prev }
    })
  }

  const saveUnit = (unit) => {
    if (!editingItem) {
      addUnit(unit)
    } else {
      updateUnit(unit)
    }

    toggleModal()
  }

  const onUnitEdit = (index) => {
    const data = currentData.units[index]
    setEditingItem(data)
    setEditingIndex(index)
    toggleModal()
  }

  const onUnitsRemove = (index) => {
    setData(prev => {
      const units = [...prev.units]
      units.splice(index, 1)
      return { ...prev, units }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(currentData)
  }

  return (
    <Container className="container">
      <h2 className="mb-4">{props.data ? `Edit Property '${props.data.name}'` : 'New Property'}</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Add property name"
            value={currentData.name}
            onChange={onInputChange}
            autoFocus
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Add a description"
            value={currentData.description}
            onChange={onInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="Add property address"
            value={currentData.address}
            onChange={onInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <h3 className="my-4">Units</h3>
          <table className="table w-50">
            <thead>
              <tr>
                <th className="w-25">Number</th>
                <th>Area</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {currentData.units.map((unit, index) => (
                <UnitItem
                  key={index}
                  index={index}
                  unit={unit}
                  isEdit={isEdit}
                  onEdit={onUnitEdit}
                  onRemove={onUnitsRemove}
                />
              ))}
            </tbody>
          </table>
          <a href="#" className="text-uppercase font-weight-bold" onClick={toggleModal}>
            <i className="fa fa-fw fa-plus-square"></i>
            Add new Unit
          </a>
          <UnitModal
            data={editingItem}
            open={openModal}
            toggle={toggleModal}
            onSave={saveUnit}
          />
        </FormGroup>
        <Button color="primary" size="md">Submit{props.submitting ? 'ting...' : ''}</Button>
      </Form>
    </Container>
  )
}

PropertyForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default PropertyForm
