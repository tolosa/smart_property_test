export const updateProperty = (properties, updatedProperty) => {
  const index = properties.findIndex(property => property.id === updatedProperty.id)
  properties[index] = updatedProperty
  
  return properties
}

const getPropertyIndex = (properties, propertyId) => {
  return properties.findIndex(property => property.id === propertyId)
}

const getUnitIndex = (properties, propertyIndex, unitId) => {
  return properties[propertyIndex].units.findIndex(unit => unit.id === unitId)
}

const getAllIndexes = (properties, propertyId, unitId) => {
  const propertyIndex = getPropertyIndex(properties, propertyId)
  const unitIndex = getUnitIndex(properties, propertyIndex, unitId)

  return {
    propertyIndex,
    unitIndex
  }
}

export const updateUnit = (properties, propertyId, unitToUpdate) => {
  const { id } = unitToUpdate
  const { propertyIndex, unitIndex } = getAllIndexes(properties, propertyId, id)
  properties[propertyIndex].units[unitIndex] = unitToUpdate

  return properties
}

export const deleteUnit = (properties, propertyId, unitToDelete) => {
  const { id } = unitToDelete
  const { propertyIndex, unitIndex } = getAllIndexes(properties, propertyId, id)

  properties[propertyIndex].units.slice(unitIndex, 1)

  return properties
}
